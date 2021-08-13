import React from "react";
import {SmileTwoTone} from "@ant-design/icons";
import {Result} from 'antd';

const Welcome = () => {
  return (
    <div className="welcome">
      <Result
        icon={<SmileTwoTone />}
        title="欢迎来到网易游戏会员俱乐部后台管理系统!"
      />
    </div>
  )
};

export default Welcome
