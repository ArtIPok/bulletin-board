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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, fetchOnePostFromAPI, getLoadingState } from '../../../redux/postsRedux.js';
import { getStatus } from '../../../redux/userSwitcherRedux.js';

import { Loading } from '../../common/Loading/Loading';
import { Error } from '../../common/Error/Error';

import styles from './Post.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchPost } = this.props;
    fetchPost();
  }
  render() {
    const { loading: { active, error }, className, post, userStatus } = this.props;
    if (active) {
      return (
        <Paper className={styles.component}>
          <Loading />
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <Error>{error}</Error>
        </Paper>
      );
    } else {
      return (
        <div className={clsx(className, styles.root)}>
          <Paper className={styles.component} elevation={9}>
            <Grid container spacing={3} alignContent='center' justify='center'>
              <Grid item xs={12} sm={5}>
                {!!post && (
                  <div className={styles.photoWrapper}>
                    <img src={post.photo} alt={post.title} />
                  </div>
                )}
                <CardActions className={styles.actions}>
                  <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label='share'>
                    <ShareIcon />
                  </IconButton>
                  {userStatus
                    ? (
                      <div className={styles.linkWrapper}>
                        <Link
                          to={`/post/${post._id}/edit`}
                          variant='subtitle1'
                          color='secondary'
                        >
                          <Fab
                            size='small'
                            color='secondary'
                            aria-label='add'
                            variant='extended'
                          >
                            Edit post
                          </Fab>
                        </Link>
                      </div>
                    ) : null
                  }
                </CardActions>
              </Grid>
              <Grid item xs={12} sm={7}>
                {!!post && (
                  <Card className={styles.card}>
                    <CardHeader
                      title={post.title}
                      className={styles.card__header}
                      subheader={`Publication date: ${post.created},last update: ${post.updated}`}
                    />
                    <CardContent className={styles.card__content}>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                        className={styles.text}
                      >
                        {post.text}
                      </Typography>
                      <Typography paragraph>
                        {' '}
                        <b>Status: </b>
                        {post.status}
                      </Typography>
                      <Typography paragraph>
                        {' '}
                        <b>Price: </b>
                        {post.price} EUR
                      </Typography>
                      <Typography paragraph>
                        <b>Author: </b>
                        {post.author}
                      </Typography>
                      <Typography paragraph>
                        <b>Phone: </b>
                        {post.phone}
                      </Typography>
                      <Typography paragraph>
                        <b>Location: </b>
                        {post.location}
                      </Typography>
                    </CardContent>
                  </Card>

                )}
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
    }
  }
}

Component.propTypes = {
  className: PropTypes.string,
  fetchPost: PropTypes.func,
  userStatus: PropTypes.bool,
  post: PropTypes.array,
  loading: PropTypes.func,
};

const mapStateToProps = (state) => ({
  post: getOne(state),
  userStatus: getStatus(state),
  loading: getLoadingState,
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPost: () => dispatch(fetchOnePostFromAPI(props.match.params.id)),
});
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
