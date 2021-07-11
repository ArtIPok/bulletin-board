const express = require('express');
const router = express.Router();
const formidable = require('formidable');

const Post = require('../models/post.models');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({ status: 'published' })
      .select('author created title photo')
      .sort({ created: -1 });
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/post/add', async (req, res) => {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.send(err.message);
    }
    // tu obsługa przesłanych danych
    // fields - pola formularza
    // files - przesłane obrazki
    try {
      const {
        author,
        created,
        updated,
        status,
        title,
        text,
        price,
        phone,
        location,
      } = fields;
      const pattern = new RegExp(
        /(<\s*(strong|em)*>(([A-z]|\s)*)<\s*\/\s*(strong|em)>)|(([A-z]|\s|\.)*)/,
        'g'
      );
      const titleMatched = (title.match(pattern) || []).join('');
      const locationMatched = (location.match(pattern) || []).join('');
      const emailPattern = new RegExp(
        '^[a-zA-Z0-9][a-zA-Z0-9_.-]+@[a-zA-Z0-9][a-zA-Z0-9_.-]+.{1,3}[a-zA-Z]{2,4}'
      );
      const validatedEmail = emailPattern.test(author);
      // const fileExt = photo.split('.').slice(-1)[0];
      // const acceptedExt = ['gif', 'jpg', 'png', 'jpeg'];
      if (titleMatched.length < title.length)
        throw new Error('Invalid characters in the title...');

      if (location && locationMatched.length < location.length)
        throw new Error('Invalid characters in the location...');

      if (!validatedEmail) throw new Error('Wrong email!');

      if (text.length < 20 || title.length < 10)
        throw new Error('The text is too short');
      if (title && text && author && status) {
        const newPost = new Post({
          // author, created, ...
          author: author,
          created: created,
          updated: updated,
          status: status,
          title: title,
          text: text,
          price: price,
          phone: phone,
          location: location,
          photo: files.photo.path,
        });
        await newPost.save();
        res.json({ newPost });
      } else {
        throw new Error('Wrong input!');
      }
    } catch (err) {
      res.status(500).json(err);
    }

  });
});

module.exports = router;
