/* GET 'about' page */
const about = (req, res) => {
  res.render('generic-text', {
    title: 'About',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan.'
  });
};

module.exports = {
  about
};
