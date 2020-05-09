import { Dispatch } from 'redux';
import * as constants from '../constants';
import post from '../axios';
import { OAUTH_URL } from '../config';

interface R {
  code: number;
}

type P = any;

const setUserInfo = (payload: P) => ({
  type: constants.GET_USER_INFO,
  payload,
});

export const getUserInfo = (payload: P) => {
  return (dispatch: Dispatch) => {
    dispatch(setUserInfo(payload));
  };
};

const setLoginOut = () => ({
  type: constants.USER_LOGIN_OUT,
});

export const userLoginOut = () => {
  return async (dispatch: Dispatch) => {
    const data = await post({ url: '/userout' });
    data ? dispatch(setLoginOut()) : '';
  };
};

export const userPrepareOauth = async (path: string) => {
  const data = await post({ url: `/prepareOauth?url=${path}` });
  data ? (location.href = OAUTH_URL) : null;
};

const setUserRepos = (payload: P) => ({
  type: constants.GET_USER_REPOS,
  payload,
});

export const getUserRepos = (payload: P) => {
  return async (dispatch: Dispatch) => {
    dispatch(setUserRepos(payload));
  };
};

const setUserStarredRepos = (payload: P) => ({
  type: constants.GET_USER_STARRED_REPOS,
  payload,
});

export const getUserStarredRepos = (payload: P) => {
  return async (dispatch: Dispatch) => {
    dispatch(setUserStarredRepos(payload));
  };
};

const setSearchRepos = (payload: P) => ({
  type: constants.GET_SEARCH_REPOS,
  payload,
});

export const getSearchRepos = (payload: P) => {
  return async (dispatch: Dispatch) => {
    dispatch(setSearchRepos(payload));
  };
};

const setDetailRepos = (payload: P) => ({
  type: constants.GET_DETAIL_USER_REPOS,
  payload,
});

export const getDetailRepos = (payload: P) => {
  return async (dispatch: Dispatch) => {
    dispatch(setDetailRepos(payload));
  };
};

const setRepoReadme = (payload: P) => ({
  type: constants.GET_REPO_README,
  payload,
});

export const getRepoReadme = (payload: P) => {
  return async (dispatch: Dispatch) => {
    dispatch(setRepoReadme(payload));
  };
};

const setRepoIssues = (payload: P) => ({
  type: constants.GET_REPO_ISSUES,
  payload,
});

export const getRepoIssues = (payload: P) => {
  return async (dispatch: Dispatch) => {
    dispatch(setRepoIssues(payload));
  };
};
