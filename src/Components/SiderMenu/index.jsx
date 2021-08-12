import React, {useEffect, useMemo} from 'react';
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

  useEffect(() => {
    if (defaultItem[0] === '' || defaultItem[1] === '') {
      history.replace('/')
    }
  }, [defaultItem]);

  const defaultItem = useMemo(() => {
    let firstOpen = '';
    let secondOpen = '';
    list.forEach((firstLevel) => {
      firstLevel.children.forEach((secondLevel) => {
        if (pathname.includes(`${firstLevel.path}${secondLevel.path}`)) {
          firstOpen = firstLevel.key;
          secondOpen = `${firstLevel.path}${secondLevel.path}`
        }
      })
    });
    return [firstOpen, secondOpen];
  }, [list, pathname]);

  const [defaultOpenKeys = '', defaultSelectedKeys = ''] = defaultItem;

  const toNext = (url) => {
    history.push(url)
  };

  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      defaultSelectedKeys={[defaultSelectedKeys]}
      className="menu"
      mode="inline"
      theme="dark"
    >
      {list.map(({name, path, key, icon, children = []}) => {
        const Icon = iconList[icon];
        return (
          <SubMenu key={key} icon={<Icon/>} title={name}>
            {children.map((item) => (
              <Menu.Item
                key={path + item.path}
                onClick={() => toNext(path + item.path)}
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
