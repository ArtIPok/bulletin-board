const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const passportConfig = require('./config/passport');

const app = express();

// init sesion mechanism
app.use(session({ secret: 'Bulletin-OAuth' }));

// init passport
app.use(passport.initialize());
app.use(passport.session());

// standard middleware
app.use(cors());

app.use('/auth', require('./routes/auth.routes'));
app.use('/user', require('./routes/user.routes'));

app.use('/', (req, res) => {
  res.status(404).render('notFound');
});

app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});
