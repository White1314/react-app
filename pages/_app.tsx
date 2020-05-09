import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { Router } from 'next/router';
import { message } from 'antd';
import LayOut from '../components/LayOut';
import initStore from '../reducers';
import * as actions from '../actions';

interface P {
  // 服务端 store 更新给客户端
  store: any;
}

class MyApp extends App<P> {
  static async getInitialProps({ Component, ctx }) {
    // 全局获取session里的用户数据
    /*
    let { store } = ctx;
    let session = ctx.req.session;
    let userInfo = session ? session.userInfo : {};
    if (!store.getState().user.id) {
      store.dispatch(actions.getUserInfo(userInfo));
    }
    */
    let pageProps = Component.getInitialProps
      ? await Component.getInitialProps({ ctx })
      : {};
    return {
      pageProps,
    };
  }

  // 页面切换进行Loading加载
  startLoading = () => {
    message.loading('');
  };

  stopLoading = () => {
    message.destroy();
  };

  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading);
    Router.events.on('routeChangeComplete', this.stopLoading);
    Router.events.on('routeChangeError', this.stopLoading);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading);
    Router.events.off('routeChangeComplete', this.stopLoading);
    Router.events.off('routeChangeError', this.stopLoading);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </Provider>
    );
  }
}

export default withRedux(initStore)(MyApp);
