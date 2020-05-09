import { useState, useCallback, FC } from 'react';
import { Layout, Input, Avatar, Tooltip, Dropdown, Menu } from 'antd';
import { GithubOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Router } from 'next/router';
import * as actions from '../actions';
import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const GithubOutlinedStyle = { color: 'white', fontSize: 40 };

interface P {
  children: React.ReactElement;
  router: Router;
}

interface S {
  user: {
    id?: number;
    avatar_url?: string;
  };
}

const LayOut: FC<P> = ({ children, router }) => {
  const initalSearchValue = router.query && router.query.value;

  const user = useSelector((state: S) => state.user);
  const dispatch = useDispatch();
  const [searchValue, setSearchVaule] = useState(initalSearchValue);

  const handleOnchange = useCallback((e) => {
    setSearchVaule(e.target.value);
  }, []);

  const handleOnSearch = useCallback(() => {
    router.push(`/search?q=${searchValue}`);
  }, [searchValue]);

  const handlePrepareOauth = useCallback(() => {
    actions.userPrepareOauth(router.asPath);
  }, []);

  const handleLoginOut = useCallback(() => {
    dispatch(actions.userLoginOut());
  }, []);

  return (
    <>
      <Layout>
        <Header>
          <div className="header-wrapper">
            <div className="header-left header-item">
              <GithubOutlined style={GithubOutlinedStyle} />
            </div>
            <div className="header-center header-item">
              <Search
                value={searchValue}
                onChange={handleOnchange}
                onSearch={handleOnSearch}
                placeholder="搜索仓库"
              />
            </div>
            <div className="header-right header-item">
              {user.id ? (
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <a href="javascipt: void(0)" onClick={handleLoginOut}>
                          退出
                        </a>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <Avatar size={40} src={user.avatar_url} />
                </Dropdown>
              ) : (
                <Tooltip title="点击登录">
                  <a href="javascipt: void(0)" onClick={handlePrepareOauth}>
                    <Avatar size={40} icon={<UserOutlined />} />
                  </a>
                </Tooltip>
              )}
            </div>
          </div>
        </Header>

        <Content>
          <div className="content-wrapper">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          MyGithub ©2020 Created by White
        </Footer>
      </Layout>
      <style jsx>
        {`
          .header-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
          }
          .header-item {
            display: flex;
            align-items: center;
          }
          .header-center {
            width: 30%;
            margin-left: 20px;
            margin-right: auto;
          }
          .content-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 20px;
            padding-bottom: 0;
            background: #fff;
          }
        `}
      </style>
      <style jsx global>
        {`
          #__next {
            height: 100%;
          }
          .ant-layout {
            height: 100%;
          }
          .ant-layout-header {
            padding: 0 20px;
            background: #6739b6;
          }
          .ant-layout-content {
            position: relative;
            height: 100%;
          }
          .ant-layout-sider {
            background: none;
          }
        `}
      </style>
    </>
  );
};

export default withRouter(LayOut);
