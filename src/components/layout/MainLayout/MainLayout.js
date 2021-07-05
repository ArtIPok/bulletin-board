import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../Header/Header';
import { Switcher } from '../../common/Switcher';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/cos';

import styles from './MainLayout.module.scss';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <Switcher className={styles.switcher} />
        <Header className={styles.header} />

        {children}
      </div>
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
