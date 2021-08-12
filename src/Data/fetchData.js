import {message} from "antd";

class request {
  constructor(prefix) {
    this.prefix = prefix;
  }

  formatUrl = (url = '', data = {}) => {
    Object.keys(data).filter(key => (data[key] !== null && data[key] !== undefined)).forEach((key, index) => {
      if (index === 0 && !(/\?.+=.+/.test(url))) {
        url += `?${key}=${data[key]}`
      } else {
        url += `&${key}=${data[key]}`
      }
    });
    return url
  };

  formatConfig = (data, headers, type, method) => {
    const config = {
      method,
    };

    if (method === 'GET') {
      config.headers = headers;
    } else if (method === 'POST') {
      config.headers = {
        "Content-Type": "application/json",
        ...headers
      }
    }

    if (type === 'send') {
      config.body = JSON.stringify(data)
    }
    return config
  };

  fetchFn = (url, data, headers, type, method) => {
    if (!url) return new Error('url is required');

    return new Promise(async (resolve, reject) => {
      const config = this.formatConfig(data, headers, type, method);

      if (type === 'query') url = this.formatUrl(url, data);

      const response = await fetch(`${this.prefix}${url}`, config);

      if (response.ok) {
        const jsonData = await response.json();
        resolve(jsonData)
      } else {
        const statusText = response.statusText;
        message.error(`出错了：${statusText}！`);
        reject(statusText)
      }
    })
  };

  get = ({url = '', data = {}, headers = {}, type = 'query'}) => {
    return this.fetchFn(url, data, headers, type, 'GET')
  };

  post = ({url = '', data = {}, headers = {}, type = 'send'}) => {
    return this.fetchFn(url, data, headers, type, 'POST')
  }
}

const createRequest = (prefix = '') => {
  return new request(prefix)
};

export default createRequest
