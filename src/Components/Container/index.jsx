import React, {useEffect, useState} from 'react';
import {Layout} from "antd";
import {Route, Switch} from 'react-router-dom'
import SiderMenu from "../SiderMenu";
import {routerConfig} from "../../Router";
import {jfFederationPath} from "../../utils/common";
import {getUserList} from "../../Data/jfMallPlatformApi";
import './index.scss';

const {Sider, Header, Content} = Layout;
const Container = React.memo(({userName}) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // 获取菜单权限列表
      const {data = []} = await getUserList();
      const menuList = [];
      routerConfig.forEach((item) => {
        const menuItem = data.find((target) => {
          return target.name === item.name
        });
        if (menuItem) {
          const children = item.children.filter((child) => {
            return menuItem.children.find((childSon) => childSon.name === child.name);
          });
          if (children.length > 0) {
            menuList.push({
              ...item,
              children,
            })
          }
        }
      });
      setMenus(menuList)
    };
    fetchData();
  }, []);
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
            {menus.length !== 0 && <SiderMenu list={menus}/>}
          </Content>
        </Layout>
      </Sider>
      <Layout className="main">
        <Content>
          <Header>
            <div style={{textAlign: 'right'}}>{userName}</div>
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
