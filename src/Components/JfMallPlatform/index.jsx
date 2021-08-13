import React from 'react';
import {jfFederationPath} from "../../utils/common";

class JfMallPlatform extends React.Component {
  history = null;

  componentDidMount() {
    import('jfPlatformUi/Base/StorePage').then(res => {
      this.history = res.default();
    })
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (this.history) {
      this.history.push(window.location.pathname.replace(jfFederationPath, ''))
    }
  }

  render() {
    return (
      <div className="content">
        <div id="alert"/>
        <div id="confirm"/>
        <div id="content"/>
      </div>
    )
  }
}

export default JfMallPlatform
