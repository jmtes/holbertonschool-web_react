import React, { Component } from 'react';
import propTypes from 'prop-types';

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.displayName = `WithLogging(${
        WrappedComponent.displayName || 'Component'
      })`;
    }

    componentDidMount() {
      console.log(
        `Component ${WrappedComponent.displayName || 'Component'} is mounted`
      );
    }

    componentWillUnmount() {
      console.log(
        `Component ${
          WrappedComponent.displayName || 'Component'
        } is going to unmount`
      );
    }
  };
};

export default WithLogging;
