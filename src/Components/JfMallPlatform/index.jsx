import React from 'react';
import {jfFederationPath} from "../../utils/common";

class JfMallPlatform extends React.Component {
  history = null;

  componentDidMount() {

  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    this.history.push(window.location.pathname.replace(jfFederationPath, ''))
  }
}
