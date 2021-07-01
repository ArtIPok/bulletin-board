import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { AUTH_URL } from '../../../config';

import clsx from 'clsx';

import { connect } from 'react-redux';

import styles from './Header.module.scss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Component = ({ className, logged }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <AppBar position='sticky' className={styles.appbar}>
        <Container maxWidth='xl'>
          <Toolbar className={styles.toolbar}>
            <Typography variant='h6'>
              <Link to={'/'} className={styles.link}>
                Bulletin Board
              </Link>
            </Typography>
            {logged ? (
              <>
                <Typography variant='h6'>
                  <Link to={'/youradds'} className={styles.link}>
                    YOUR POSTS
                  </Link>
                </Typography>
                <Button
                  color='inherit'
                  variant='outlined'
                  className={styles.login}
                  href='/logout'
                  value='false'
                  onClick={(event) => this.handleOnChange(event.target.value)}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                color='inherit'
                variant='outlined'
                href='https://google.com'
                className={styles.login}
                value='true'
                onClick={(event) => this.handleOnChange(event.target.value)}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
};

const mapStateToProps = state => ({
  logged: state.user.logged,
});


// const mapStateToProps = state => ({
//   logged: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const ContainerHeader = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  ContainerHeader as HeaderContainer,
  Component as HeaderComponent,
};
