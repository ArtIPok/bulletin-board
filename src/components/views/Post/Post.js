import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/cos';

import styles from './Post.module.scss';

const Component = ({ className, logged, postId, postsTitle, postsText }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Post</h2>
      {logged
        ? (
          <div className={styles.linkWrapper}>
            <Paper className={styles.component} elevation={9}>
              <Grid container spacing={3} alignContent='center' justify='center'>
                <Grid item xs={12} sm={5}>
                  <CardActions className={styles.actions}>
                    <Link
                      to={`/post/${postId}/edit`}
                      variant='subtitle1'
                      color='primary'
                    >
                      <Fab
                        size='small'
                        color='primary'
                        aria-label='add'
                        variant='extended'
                      >
                        Edit post
                      </Fab>
                    </Link>
                  </CardActions>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Card className={styles.card}>
                    <CardHeader
                      title={postsTitle}
                      className={styles.card__header}
                    />
                    <CardContent className={styles.card__content}>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                        className={styles.text}
                      >
                        {postsText}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </div>
        )
        : null
      }
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
  postId: PropTypes.string,
  postsTitle: PropTypes.string,
  postsText: PropTypes.string,
  postsData: PropTypes.array,
};

const mapStateToProps = state => ({
  logged: state.user.logged,
  postId: state.posts.data.id,
  postsTitle: state.posts.data.title,
  postsText: state.posts.data.text1,
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  Container as PostContainer,
  Component as PostComponent,
};
