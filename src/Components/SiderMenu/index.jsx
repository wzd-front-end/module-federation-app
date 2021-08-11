import React, {useMemo} from 'react';
import {Menu} from 'antd';
import {useHistory, useLocation} from 'react-router-dom';
import {
  CompassOutlined,
  LaptopOutlined,
  BlockOutlined,
  ShoppingOutlined,
  ContainerOutlined,
  ShopOutlined,
  CoffeeOutlined,
  NotificationOutlined,
  SmileOutlined,
  DesktopOutlined,
  GiftOutlined,
  HomeOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  WhatsAppOutlined,
  SettingOutlined,
  ToolOutlined,
  VerifiedOutlined
} from '@ant-design/icons';
import './index.scss';

const {SubMenu} = Menu;
const iconList = {
  'CompassOutlined': CompassOutlined,
  'LaptopOutlined': LaptopOutlined,
  'BlockOutlined': BlockOutlined,
  'ShoppingOutlined': ShoppingOutlined,
  'ContainerOutlined': ContainerOutlined,
  'ShopOutlined': ShopOutlined,
  'CoffeeOutlined': CoffeeOutlined,
  'NotificationOutlined': NotificationOutlined,
  'SmileOutlined': SmileOutlined,
  'DesktopOutlined': DesktopOutlined,
  'GiftOutlined': GiftOutlined,
  'HomeOutlined': HomeOutlined,
  'UserAddOutlined': UserAddOutlined,
  'UsergroupAddOutlined': UsergroupAddOutlined,
  'WhatsAppOutlined': WhatsAppOutlined,
  'SettingOutlined': SettingOutlined,
  'ToolOutlined': ToolOutlined,
  'VerifiedOutlined': VerifiedOutlined
};

const SiderMenu = React.memo(({list = []}) => {
  const history = useHistory();
  const location = useLocation();
  const {pathname} = location;

  const defaultOpenKeys = useMemo(() => {
    let result = '';
    list.forEach((firstLevel) => {
      firstLevel.children.forEach((secondLevel) => {
        if (pathname === secondLevel.path + secondLevel.children[0].path) {
          result = firstLevel.key;
        }
      })
    });
    return result;
  });

  const toNext = (url) => {
    history.push(url)
  };

  return (
    <Menu
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={[defaultOpenKeys]}
      className="menu"
      mode="inline"
      theme="dark"
    >
      {list.map(({name, key, icon, children = []}) => {
        const Icon = iconList[icon];
        return (
          <SubMenu key={key} icon={<Icon/>} title={name}>
            {children.map((item) => (
              <Menu.Item
                key={item.path + item.children[0].path}
                onClick={() => toNext(item.path + item.children[0].path)}
              >
                {item.name}
              </Menu.Item>
            ))}
          </SubMenu>
        )
      })}
    </Menu>
  )
});

export default SiderMenu
