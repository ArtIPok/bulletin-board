import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Error.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.error}>
      <h2>We are sorry.. something went wrong..</h2>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Error,
  Component as ErrorComponent,
};
