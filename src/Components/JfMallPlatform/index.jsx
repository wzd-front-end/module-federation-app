import React, {} from 'react';
import {jfFederationPath} from "../../utils/common";
import {Spin} from "antd";

class JfMallPlatform extends React.Component {
  history = null;
  state = {
    loading: true
  };

  componentDidMount() {
    import('jfPlatformUi/Base/StorePage').then(res => {
      this.history = res.default();
      this.setState({loading: false})
    })
  }

  componentDidUpdate() {
    if (this.history) {
      this.history.push(window.location.pathname.replace(jfFederationPath, ''))
    }
  }

  render() {
    return (
      <Spin spinning={this.state.loading} size="large" wrapperClassName="content">
        <div id="alert"/>
        <div id="confirm"/>
        <div id="content"/>
      </Spin>
    )
  }
}

export default JfMallPlatform
