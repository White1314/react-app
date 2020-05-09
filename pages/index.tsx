import { useSelector } from 'react-redux';
//import Link from 'next/link';
import { Button, Tabs } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import * as actions from '../actions';
//import post from '../axios';
import { getApiData } from '../server/utils.js';
import { OAUTH_URL } from '../config.js';
import Repo from '../components/Repo';

interface userState {
  user: {
    id: number;
    avatar_url: string;
    login: string;
    name: string;
    bio: string;
    email: string;
  };
}

interface homeState {
  home: {
    user_repo: any;
    user_starred_repo: any;
  };
}

const Index = () => {
  const { id, avatar_url, login, name, bio, email } = useSelector(
    (state: userState) => state.user
  );
  const userRepo = useSelector((state: homeState) => state.home.user_repo);
  const userStarredRepo = useSelector(
    (state: homeState) => state.home.user_starred_repo
  );
  return (
    <>
      {!id ? (
        <div className="root">
          <Button type="primary" href={OAUTH_URL}>
            点击登录
          </Button>
        </div>
      ) : (
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="user-info">
            <img src={avatar_url} alt="" className="avatar" />
            <span className="login">{login}</span>
            {name ? <span className="name">{name}</span> : null}
            {bio ? <span className="bio">{bio}</span> : null}
            {email ? (
              <p className="email">
                <MailOutlined style={{ marginRight: 10 }} />
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            ) : null}
          </div>
          <div className="user-repo">
            {
              <Tabs defaultActiveKey="0" animated={false}>
                <Tabs.TabPane tab="你的仓库" key="0">
                  {userRepo.map((item: any) => (
                    <Repo repo={item} key={item.id} />
                  ))}
                </Tabs.TabPane>
                <Tabs.TabPane tab="收藏的仓库" key="1">
                  {userStarredRepo.map((item: any) => (
                    <Repo repo={item} key={item.id} />
                  ))}
                </Tabs.TabPane>
              </Tabs>
            }
          </div>
        </div>
      )}
      <style jsx>
        {`
          .root {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .user-info {
            width: 200px;
            margin-right: 40px;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
          }
          .avatar {
            width: 100%;
            border-radius: 5px;
          }
          .login {
            font-weight: 300;
            font-size: 20px;
            margin-top: 20px;
            color: #666;
          }
          .name {
            margin-top: 20px;
            font-size: 16px;
            color: #777;
          }
          .bio {
            margin-top: 20px;
            color: #333;
          }
          .email {
            margin-top: 20px;
          }
          .user-repo {
            width: 100%;
            height: 100%;
            overflow: auto;
          }
        `}
      </style>
    </>
  );
};

Index.getInitialProps = async ({ ctx }) => {
  const { store } = ctx;

  // 查看用户仓库信息需先登录
  const id = store.getState().user.id;
  if (!id) {
    return;
  }
  // 信息缓存在 redux
  const data = Promise.all([
    await getApiData(ctx, '/user/repos'),
    await getApiData(ctx, '/user/starred'),
  ]);

  store.dispatch(actions.getUserRepos(data[0]));
  store.dispatch(actions.getUserStarredRepos(data[1]));
};

export default Index;
