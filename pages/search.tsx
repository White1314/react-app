import { isValidElement, useMemo, useCallback } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { Layout, List, Pagination } from 'antd';
import { useSelector } from 'react-redux';

import { getApiData } from '../server/utils.js';
import { getParamsToPath } from '../utils';
import * as actions from '../actions';
import { getLink } from '../utils';
import Repo from '../components/Repo';

const LANGUAGES = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java', 'Rust'];
const SORT_TYPES = [
  { name: 'Best Match' },
  { name: 'Most Stars', value: 'stars', order: 'dsc' },
  { name: 'Fewest Stars', value: 'stars', order: 'asc' },
  { name: 'Most Forks', value: 'forks', order: 'dsc' },
  { name: 'Fewest Forks', value: 'forks', order: 'asc' },
];
const selectedItemStyle = {
  borderLeft: '2px solid #6739b6',
  fontWeight: 100,
};
const { Sider, Content } = Layout;

interface Item {
  name: string;
  value: string;
  order: string;
}

interface S {
  search?: {
    search_repo: any;
  };
}

const Search = ({ router }) => {
  const { query } = router;

  const total_count = useSelector(
    (state: S) => state.search.search_repo.total_count
  );
  let items = useSelector((state: S) => state.search.search_repo.items);

  const handleGetLink = useCallback((item, query) => getLink(item, query), []);

  return (
    <div className="root">
      <Layout>
        <Sider>
          <div className="menu">
            <List
              bordered
              header={<span className="list-header">语言</span>}
              style={{ marginBottom: 20 }}
              dataSource={LANGUAGES}
              renderItem={(item) => {
                let selected = item === query.lang;
                return (
                  <List.Item style={selected ? selectedItemStyle : null}>
                    {selected ? (
                      <span>{item}</span>
                    ) : (
                      <Link href={getLink(item, query)}>
                        <a>{item}</a>
                      </Link>
                    )}
                  </List.Item>
                );
              }}
            />
            <List
              bordered
              header={<span className="list-header">排序</span>}
              dataSource={SORT_TYPES}
              renderItem={(item: Item) => {
                let selected = false;
                if (item.name === 'Best Match' && !query.sort) {
                  selected = true;
                } else if (
                  item.value === query.sort &&
                  item.order === query.order
                ) {
                  selected = true;
                }
                return (
                  <List.Item style={selected ? selectedItemStyle : null}>
                    {selected ? (
                      <span>{item.name}</span>
                    ) : (
                      <Link href={handleGetLink(item, query)}>
                        <a>{item.name}</a>
                      </Link>
                    )}
                  </List.Item>
                );
              }}
            />
          </div>
        </Sider>
        <Content>
          <div className="content">
            <div className="items-warpper">
              <h3 className="repos-title">{total_count} 个仓库</h3>
              {items
                ? items.map((item: any) => (
                    <Repo repo={item} key={item.id}></Repo>
                  ))
                : null}
            </div>
            <div className="pagination">
              <Pagination
                pageSize={30}
                current={Number(query.page) || 1}
                total={total_count}
                onChange={() => {}}
                itemRender={(page, type, ol) => {
                  const p =
                    type === 'page'
                      ? page
                      : type === 'prev'
                      ? page - 1
                      : page + 1;
                  const a = type === 'page' ? page : ol;
                  // a 可能是 页码 p 或者 Element ...
                  return isValidElement(a) ? (
                    a
                  ) : (
                    <Link href={handleGetLink(p, query)}>
                      <a>{a}</a>
                    </Link>
                  );
                }}
              />
            </div>
          </div>
        </Content>
      </Layout>

      <style jsx>{`
        .root {
          height: 100%;
        }
        .menu {
          height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
          background: #fff;
        }
        .content {
          height: 100%;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          background: #fff;
        }
        .items-warpper {
          flex: 1;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

Search.getInitialProps = async ({ ctx }) => {
  // `https://api.github.com/search/repositories?q=${name}`
  const { store, query } = ctx;
  // api/search
  const searchRepodata = await getApiData(
    ctx,
    `/search/repositories${getParamsToPath(query)}`
  );
  store.dispatch(actions.getSearchRepos(searchRepodata));
};

export default withRouter(Search);
