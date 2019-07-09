if (process.env.NODE_ENV == 'production') {
  module.exports = {
    mongoURI:
      'mongodb://<dbuser>:<dbpassword>@ds349587.mlab.com:49587/blogapp-prod'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/blogapp' };
}