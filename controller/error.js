// 404 error page
const pageNotFound = (req, res) => {
  /**
   *file name accessed from view engine from server
    dynamic data to render along with it 
   */
  res.render('404', { title: 'ERROR', content: 'Page Not Found' });
};

module.exports = pageNotFound;
