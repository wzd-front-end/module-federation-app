import React from 'react';
import {Menu} from 'antd';
import {useHistory, useLocation} from 'react-router-dom';
import {CompassOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const iconList = {
  'CompassOutlined': CompassOutlined,
};

const Menu = React.memo(({list = []}) => {
  const history = useHistory();
  const location = useLocation();

  const toNext = (url) => {
    history.push(url)
  };

  return (
    <Menu
      defaultSelectedKeys={}
      defaultOpenKeys={}
      mode="inline"
      theme="dark"
    >
      {list.map(({path, name, key, icon, children = []}) => {
        const Icon = iconList[icon];
        return (
          <SubMenu key={key} icon={<Icon/>} title={name}>
            {children.map((item) => (
              <Menu.Item key={path + item.path} onClick={() => toNext(path + item.path)}>{item.name}</Menu.Item>
            ))}
          </SubMenu>
        )
      })}
    </Menu>
  )
});

export default Menu
