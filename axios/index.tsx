import axios from 'axios';

interface O {
  url: string;
  data?: {};
}

interface R {
  status: number;
  data: {
    code: number;
    msg?: string;
    // 接口返回的 json 数据
    data: any;
  };
}

export default (options: O) => {
  return new Promise((resolve, reject) => {
    axios({
      url: options.url,
      method: 'post',
      data: options.data,
    })
      .then((res: R) => {
        if (res.status === 200 && res.data.code === 0) {
          // 后台数据
          resolve(res.data.data);
        } else if (res.status === 200 && !res.data.code) {
          // api 数据
          resolve(res.data);
        } else {
          reject('error');
        }
      })
      .catch((err) => {
        resolve(err);
      });
  });
};
