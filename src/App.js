import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {message, Spin, Result} from 'antd';
import {SyncOutlined} from '@ant-design/icons';
import Container from "./Components/Container";
import {postLogin} from "./Data/jfMallPlatformApi";
import './App.css';

const App = () => {
  // 状态类型： Logging, LoggingError， NoPower, Success
  const [status, setStatus] = useState('Logging');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data = {}} = await postLogin();

        if (data.auth_url) {
          // 未登录状态
          window.location.href = data.auth_url;
        } else if (data.right === 1) {
          // 登录成功
          message.info(`欢迎回来，${data.userName}`);
          setStatus('Success');
          setUserName(data.userName);
          renderWatermark(data.userName);
        } else {
          // 暂无权限登录
          setStatus('NoPower')
        }
      } catch (e) {
        message.error(e.message);
        setStatus('LoggingError');
      }
    };
    fetchData();
  }, []);

  const renderWatermark = (acountName) => {
    const style = document.getElementById('jf-wm-style');
    style.innerHTML = `
      .water-mark-item {
        position:absolute;
        z-index:99999;
        font-size:20px;
        color:#000;
        opacity:0.08;
        filter:alpha(opacity=8);
        pointer-events:none;
        -webkit-transform:rotate(-15deg);
        -moz-transform:rotate(-15deg);
        -o-transform:rotate(-15deg);
        -ms-transform:rotate(-15deg);
        transform:rotate(-15deg);
        max-width:250px;
        word-wrap:break-word;
      }
      .water-mark-item::before{
        content: '${acountName}'
      }
    `;

    document.getElementById('watermark-container').style.display = 'none';
    document.getElementById('watermark-container').innerHTML = '';
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 6; j++) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('water-mark-item');
        itemElement.style.left = `${i * 25}%`;
        itemElement.style.top = `${j * 16.7}%`;
        document.getElementById('watermark-container').appendChild(itemElement)
      }
    }
    document.getElementById('watermark-container').style.display = 'block'
  };

  const renderContent = () => {
    const antIcon = <SyncOutlined style={{fontSize: 50}} spin/>;

    switch (status) {
      case 'Logging':
        return (
          <div className="loadling-block">
            <Spin size="large" indicator={antIcon} tip="登录中..."/>
          </div>
        );
      case 'LoggingError':
        return (
          <div className="loadling-block">
            <Result status="error" title="登录出错"/>
          </div>
        );
      case 'NoPower':
        return (
          <div className="loadling-block">
            <Result status="warning" title="账号暂无权限，请联系管理员"/>
          </div>
        );
      case 'Success':
        return (
          <div>
            <BrowserRouter>
              <Container userName={userName}/>
            </BrowserRouter>
          </div>
        )
    }
  };

  return <div>{renderContent()}</div>
};

export default App
