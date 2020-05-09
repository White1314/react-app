import { Tabs, message } from 'antd';
import { useSelector } from 'react-redux';

import { getApiData } from '../server/utils.js';
import * as actions from '../actions';
import Markdown from '../components/Markdown';
import Issues from '../components/Issues';
import SearchUser from '../components/SearchUser';
import { useState, useCallback } from 'react';

interface S {
  detail: {
    user_repo?: {
      name: string;
      owner?: {
        avatar_url: string;
        login: string;
      };
    };
    repo_readme?: {
      content: any;
    };
    repo_issues: any;
  };
}

const Detail = ({ owner, name }) => {
  const userRepo = useSelector((state: S) => state.detail.user_repo);
  const repoReadme = useSelector((state: S) => state.detail.repo_readme);
  const repoIssues = useSelector((state: S) => state.detail.repo_issues);

  const [issues, setIssues] = useState(repoIssues);

  // 父组件执行筛选用户的操作
  const onChange = useCallback(async (value) => {
    const data = await getApiData(
      null,
      `/repos/${owner}/${name}/issues?creator=${value}`
    );
    data.length ? setIssues(data) : message.info('无结果');
  }, []);

  return (
    <>
      <div className="root">
        <div className="head">
          <img src={userRepo.owner?.avatar_url} alt="" className="head-img" />
          <span className="head-login">{userRepo.owner?.login}</span>
          <a className="head-name">{`${userRepo.name} / ${userRepo.owner?.login}`}</a>
        </div>
        <div className="content">
          <Tabs defaultActiveKey="0" animated={false}>
            <Tabs.TabPane tab="文档" key="0">
              <Markdown content={repoReadme.content} isBase64={true} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="讨论" key="1">
              <SearchUser onChange={onChange} />
              {issues.map((item: any) => (
                <div className="issue" key={item.id}>
                  <Issues issues={item} />
                </div>
              ))}
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>

      <style jsx>{`
        .root {
          height: 100%;
          overflow-y: auto;
        }
        .head {
          display: flex;
          align-items: center;
          font-size: 12px;
        }
        .head-img {
          width: 30px;
          height: 30px;
        }
        .head-login {
          color: #666;
          margin: 0 10px;
        }
        .head-name {
          font-weight: 500;
        }
        .content {
          margin-right: 20px;
        }
        .issue:hover {
          border-top: 1px solid #6739b6;
        }
      `}</style>
    </>
  );
};

Detail.getInitialProps = async ({ ctx }) => {
  const { store, query } = ctx;
  const { owner, name } = query;

  const data = await Promise.all([
    await getApiData(ctx, `/repos/${owner}/${name}`),
    await getApiData(ctx, `/repos/${owner}/${name}/readme`),
    await getApiData(ctx, `/repos/${owner}/${name}/issues`),
  ]);

  store.dispatch(actions.getDetailRepos(data[0]));
  store.dispatch(actions.getRepoReadme(data[1]));
  store.dispatch(actions.getRepoIssues(data[2]));

  return {
    owner,
    name,
  };
};

export default Detail;
