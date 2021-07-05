import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ImageUploader from 'react-images-upload';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/cos';

import styles from './PostEdit.module.scss';

import { NotFoundContainer } from '../NotFound/NotFound';

const Component = ({ className, logged, postsTitle, postsText, postsAuthor, postsLocation, postsPrice, postsPhone, postsStatus }) => {
  return (
    <div className={clsx(className, styles.root)}>
      {logged ? (
        <Grid container align='center' justify='center'>
          <Grid item align='center' xs={12} sm={9}>
            <Paper className={styles.form}>
              <form onSubmit={this.submitForm}>
                <Typography variant='h6'>
                  <p>{postsAuthor}</p>
                  <p>Edit your announcement</p>
                </Typography>

                <Grid item align='center' xs={12} sm={9}>
                  <TextField
                    required
                    name='title'
                    label='Title'
                    variant='filled'
                    // onChange={this.handleChange}
                    value={postsTitle}
                    helperText='min. 10 characters'
                    fullWidth
                    margin='normal'
                  />
                </Grid>
                <Grid item align='center' xs={12} sm={9}>
                  <TextField
                    required
                    name='text'
                    label='Give the full description!'
                    variant='filled'
                    // onChange={this.handleChange}
                    value={postsText}
                    helperText='min. 20 characters'
                    fullWidth
                    multiline
                  />
                </Grid>
                <Grid item align='center' xs={12} sm={9}>
                  <TextField
                    required
                    name='author'
                    label='Your Email'
                    variant='filled'
                    // onChange={this.handleChange}
                    value={postsAuthor}
                    helperText='Put your valid email'
                    fullWidth
                  />
                </Grid>
                <Grid item align='center' xs={12} sm={9}>
                  <TextField
                    required
                    name='location'
                    label='Location'
                    variant='filled'
                    // onChange={this.handleChange}
                    value={postsLocation}
                    helperText='Location'
                    fullWidth
                  />
                </Grid>
                <Grid item align='center' xs={12} sm={9}>
                  <TextField
                    required
                    name='price'
                    label='Price'
                    variant='filled'
                    // onChange={this.handleChange}
                    value={postsPrice}
                    helperText='Price in EUR'
                    fullWidth
                  />
                </Grid>
                <Grid item align='center' xs={12} sm={9}>
                  <TextField
                    required
                    name='phone'
                    label='Phone number'
                    variant='filled'
                    // onChange={this.handleChange}
                    value={postsPhone}
                    helperText='Give you contact number'
                    fullWidth
                  />
                </Grid>
                <Grid item align='center' xs={12} sm={9}>
                  <FormControl fullWidth>
                    <InputLabel id='status'>Status of your add</InputLabel>
                    <Select
                      labelId='status'
                      id='status'
                      // onChange={this.handleChange}
                      fullWidth
                      variant='filled'
                      name='status'
                      value={postsStatus}
                    >
                      <MenuItem value='draft'>draft</MenuItem>
                      <MenuItem value='published'>published</MenuItem>
                      <MenuItem value='closed'>closed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={9} className={styles.paperCard__item}>
                  <Typography align='center'>Add photo</Typography>
                  <ImageUploader
                    withIcon={true}
                    buttonText='Choose image'
                    imgExtension={['.jpg', '.gif', '.png', '.gif', '.jfif']}
                    maxFileSize={5242880}
                    withPreview={true}
                    // onChange={this.setPhoto}
                    singleImage={true}
                    className={styles.file}
                  />
                </Grid>
                <Grid item xs={12} sm={9} align='center'>
                  <Button variant='contained' type='submit' color='secondary'>
                    Submit
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <NotFoundContainer />
      )}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
  postsTitle: PropTypes.string,
  postsText: PropTypes.string,
  postsAuthor: PropTypes.string,
  postsLocation: PropTypes.string,
  postsPrice: PropTypes.string,
  postsPhone: PropTypes.string,
  postsStatus: PropTypes.string,
};

const mapStateToProps = state => ({
  logged: state.user.logged,
  postsTitle: state.posts.data.title,
  postsText: state.posts.data.text1,
  postsAuthor: state.posts.data.author,
  postsLocation: state.posts.data.location,
  postsPrice: state.posts.data.price,
  postsPhone: state.posts.data.phone,
  postsStatus: state.posts.data.status,
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostEdit,
  Container as PostEditContainer,
  Component as PostEditComponent,
};
