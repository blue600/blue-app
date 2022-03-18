import axios from 'axios';

const url = 'http://localhost:3500';

export default axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' }, // blue600 全部采用 REST api，json传输格式
  withCredentials: true, // 这个不能忘了，否则 res.cookie() 传不回浏览器
});

// 因为授权访问需要设置axios拦截器，所以要用一个专门的axios对象
export const axiosPrivate = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
