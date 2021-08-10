import React from 'react';
import {Layout} from "antd";
import './index.scss';

const {Sider, Header, Content} = Layout;
const Container = React.memo(() => {
  return (
    <Layout className="page">
      <Sider width={260}>
        <Layout className="sider-layout">
          <Header style={{background: 'rgba(0, 40, 77, 1)', padding: 0}}>
            <div>
              <h3 className="project-name">
                <img alt="icon" src="//plus.fp.ps.netease.com/file/5fa3c38a6f0494492695aa55DZZieeSq02"/>
                <div>后台管理系统</div>
              </h3>
            </div>
          </Header>
          <Content>

          </Content>
        </Layout>
      </Sider>
      <Layout className="main">
        <Content>
          <Header>
            <div style={{textAlign: 'right'}}>测试</div>
          </Header>

        </Content>
      </Layout>
    </Layout>
  )
});

export default Container
