import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as constants from '../constants';

interface A {
  type?: string;
  payload?: any;
}

const reducers = {
  // 类似 user: useReducer
  user: (state = {}, action: A) => {
    switch (action.type) {
      case constants.GET_USER_INFO:
        return { ...action.payload };
      case constants.USER_LOGIN_OUT:
        return {};
      default:
        return state;
    }
  },
  home: (state = {}, action: A) => {
    switch (action.type) {
      case constants.GET_USER_REPOS:
        return { ...state, user_repo: action.payload };
      case constants.GET_USER_STARRED_REPOS:
        return { ...state, user_starred_repo: action.payload };
      default:
        return state;
    }
  },
  search: (state = {}, action: A) => {
    switch (action.type) {
      case constants.GET_SEARCH_REPOS:
        return { ...state, search_repo: action.payload };
      default:
        return state;
    }
  },
  detail: (state = {}, action: A) => {
    switch (action.type) {
      case constants.GET_DETAIL_USER_REPOS:
        return { ...state, user_repo: action.payload };
      case constants.GET_REPO_README:
        return { ...state, repo_readme: action.payload };
      case constants.GET_REPO_ISSUES:
        return { ...state, repo_issues: action.payload };
      default:
        return state;
    }
  },
};

// 中间件
const middleware = [thunk];
const reducer = combineReducers(reducers);

const serverInitState = {
  user: {},
  home: {
    user_repo: [],
    user_starred_repo: [],
  },
  search: {
    search_repo: [],
  },
  detail: {
    user_repo: [],
    repo_readme: [],
    repo_issues: [],
  },
};

// initState 接受服务端的数据并更新数据
const initStore = (initState = serverInitState) =>
  createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default initStore;
