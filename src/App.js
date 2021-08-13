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

        if (data.authUrl) {
          // 未登录状态
          window.location.href = data.authUrl;
        } else if (data.right === 1) {
          // 登录成功
          message.info(`欢迎回来，${data.userName}`);
          setStatus('Success');
          setUserName(data.userName);
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

  const renderContent = () => {
    const antIcon = <SyncOutlined style={{fontSize: 50}} spin/>;

    switch (status) {
      case 'Logging':
        return (
          <div className="loadling-block">
            <Spin size="large" indicator={antIcon} tip="加载中..."/>
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
