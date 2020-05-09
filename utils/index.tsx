import moment from 'moment';

export const getLastUpdated = (time: any) => {
  return moment(time).fromNow();
};

export const getParamsToPath = (params: any) => {
  let keys = Object.keys(params);
  let values = Object.values(params);
  let path = '';
  keys.forEach(function (item, index) {
    let str = `${item}=${values[index]}`;
    if (!index) {
      path += `?${str}`;
      return;
    }
    path += `&${str}`;
  });
  return path;
};

interface I {
  value: string;
  order: string;
}

interface Q {
  q: string;
  lang: string;
  sort: string;
  order: string;
}

export const getLink = (item: string | I | number, query: Q) => {
  let params = {};
  if (typeof item === 'string') {
    // 语言
    params = { ...query, ...{ lang: item } };
  } else if (typeof item === 'number') {
    // 分页
    params = { ...query, ...{ page: item } };
  } else {
    // 排序
    params = { ...query, ...{ sort: item.value, order: item.order } };
  }
  return getParamsToPath(params);
};
