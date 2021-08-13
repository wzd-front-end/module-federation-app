import React from "react";
import {Result, Button} from 'antd';
import {useHistory} from "react-router-dom";

const NoFound = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack()
  };
  return (
    <div className="no-404">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={goBack}>返回</Button>}
      />
    </div>
  )
};
export default NoFound
