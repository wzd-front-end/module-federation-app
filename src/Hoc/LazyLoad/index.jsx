import React from 'react'

export default function lazyLoad(componentFn) {
  return class LazyLoadComponent extends React.Component {
    shouldReturn = false;

    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
      this.getComponent()
    }

    getComponent = async () => {
      const {default: component} = await componentFn();
      if (this.shouldReturn) return;
      this.setState({
        component: component
      })
    };

    componentWillUnmount() {
      this.shouldReturn = true
    }

    render() {
      let C = this.state.component;
      return C ? <C {...this.props}></C> : null
    }
  }
}
