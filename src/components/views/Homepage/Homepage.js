import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchPublished, getLoadingState } from '../../../redux/postsRedux';
import { getStatus } from '../../../redux/userSwitcherRedux';

import { PostBox } from '../../features/PostBox';
import { Loading } from '../../common/Loading/Loading';
import { Error } from '../../common/Error/Error';

import styles from './Homepage.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchPublishedPosts } = this.props;
    fetchPublishedPosts();
  }
  componentDidUpdate(prevProps) {
    const { fetchPublishedPosts, posts } = this.props;
    if (posts === {} || posts !== prevProps.posts) {
      fetchPublishedPosts();
    }
  }

  render() {
    const { posts, className, userStatus, loading: { active, error } } = this.props;
    if (active || !posts.length) {
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
          {userStatus
            ? (
              <div className={styles.buttonAdd}>
                <Link to={'/post/add'} variant='subtitle1' color='primary'>
                  <Fab
                    size='small'
                    color='primary'
                    aria-label='add'
                    variant='extended'
                  >
                    Add new post
                  </Fab>
                </Link>
              </div>
            )
            : null
          }
          {posts.map(post => (
            <PostBox
              key={post._id}
              photo={post.photo}
              title={post.title}
              created={post.created}
              updated={post.updated}
              text={post.text}
              id={post._id}
              userStatus={userStatus}
            />
          ))}
        </div>
      );
    }
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  userStatus: PropTypes.bool,
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
  loading: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  userStatus: getStatus(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
