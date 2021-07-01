import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';


import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/cos';

import styles from './Homepage.module.scss';
// import { PostAdd } from '@material-ui/icons';
// import { NotFound } from '../NotFound/NotFound';

const Component = ({ className, logged, postTitle }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Homepage</h2>
      {logged
        ? (
          // <Button
          //   className={styles.button}
          //   variant='contained'
          //   color='primary'
          //   component={Link}
          //   to={'/post/add'}
          // >
          // Add post
          // </Button>
          <div className={styles.buttonAdd}>
            <Link to={'/post/add'} variant='subtitle1' color='primary'>
              <Fab
                size='small'
                color='primary'
                aria-label='add'
                variant='extended'
              >
                Add new add
              </Fab>
            </Link>
          </div>
        )
        : null
      }
      <div>
        {postTitle}
      </div>
    </div>
  );
};


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
  postTitle:PropTypes.string,
};

const mapStateToProps = state => ({
  logged: state.user.logged,
  postTitle: state.posts.data.title,
});

const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  Container as HomepageContainer,
  Component as HomepageComponent,
};
