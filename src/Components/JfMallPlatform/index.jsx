import React from 'react';
import {jfFederationPath} from "../../utils/common";

class JfMallPlatform extends React.Component {
  history = null;

  componentDidMount() {

  }

  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   // this.history.push(window.location.pathname.replace(jfFederationPath, ''))
  // }
  render() {
    return (
      <div>
        <div id="alert"/>
        <div id="confirm"/>
        <div id="content"/>
      </div>
    )
  }
}

export default JfMallPlatform
