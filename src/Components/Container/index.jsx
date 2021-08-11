import React from 'react';
import {Layout} from "antd";
import {Route, Switch} from 'react-router-dom'
import SiderMenu from "../SiderMenu";
import {routerConfig} from "../../Router";
import {jfFederationPath} from "../../utils/common";
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
            <SiderMenu list={routerConfig}/>
          </Content>
        </Layout>
      </Sider>
      <Layout className="main">
        <Content>
          <Header>
            <div style={{textAlign: 'right'}}>测试</div>
          </Header>
          <Content>
            <div className="content">
              <Switch>
                {/*<Route path={jfFederationPath} component={}/>*/}
                {/*{routerConfig.map((firstLevel) => {*/}
                {/*  return firstLevel.children.map((secondLevel, index) => {*/}
                {/*    return (*/}
                {/*      <Route*/}
                {/*        path={firstLevel.path + secondLevel.path}*/}
                {/*        key={firstLevel.path + secondLevel.path}*/}
                {/*        component={}*/}
                {/*        exact*/}
                {/*      />*/}
                {/*    )*/}
                {/*  })*/}
                {/*})}*/}
              </Switch>
            </div>
          </Content>
        </Content>
      </Layout>
    </Layout>
  )
});

export default Container
