import React, {useEffect, useState} from 'react';
import {Layout} from "antd";
import {Route, Switch} from 'react-router-dom'
import SiderMenu from "../SiderMenu";
import JfMallPlatform from "../JfMallPlatform";
import NoFound from "../../Pages/404";
import Welcome from "../../Pages/welcome";
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

  const renderRouter = () => {
    const routerList = [];
    routerConfig.forEach((firstLevel) => {
      firstLevel.children.forEach((secondLevel) => {
        if (!secondLevel.federation) {
          secondLevel.children.forEach((thirdLevel) => {
            routerList.push(
              <Route
                exact
                key={`${firstLevel.path}${secondLevel.path}${thirdLevel.path}`}
                path={`${firstLevel.path}${secondLevel.path}${thirdLevel.path}`}
                component={thirdLevel.component}
              />
            )
          })
        }
      })
    });

    return routerList
  };

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
            <Switch>
              <Route path='/' component={Welcome} exact/>
              <Route path={jfFederationPath} component={JfMallPlatform}/>
              {renderRouter()}
              <Route component={NoFound}/>
            </Switch>
          </Content>
        </Content>
      </Layout>
    </Layout>
  )
});

export default Container
