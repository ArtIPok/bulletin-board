import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/cos';

import styles from './{{pascalCase name}}.module.scss';

const Component = ({ className, children }) => {
  return(
    <div className={clsx(className, styles.root)}>
      <h2>{{pascalCase name}}</h2>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someeProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as {{pascalCase name}},
  // Container as {{pascalCase name}},
  Component as {{pascalCase name}}Component,
};
