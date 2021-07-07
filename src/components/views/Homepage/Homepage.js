import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux';
import { getStatus } from '../../../redux/userSwitcherRedux';

import { PostBox } from '../../features/PostBox';

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
    const { posts, className, userStatus } = this.props;
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
        {posts.map((post) => (
          <PostBox
            photo = {post.photo}
            title = {post.title}
            created = {post.created}
            updated = {post.updated}
            text = {post.text}
            id = {post._id}
            userStatus = {userStatus}
          />
        ))}
      </div>
    );
  }
}


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  userStatus: PropTypes.bool,
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  userStatus: getStatus(state),
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
