/* 
Bundle eveyrthing using Parcel and remove unused css using PurgeCSS 
---------------Source & Credits ❤️ -------------------
  PurgeCSS https://purgecss.com/configuration.html#configuration-file
  Bootstrap Example: https://github.com/twbs/bootstrap-npm-starter
*/

module.exports = {
	content: ['index.html', 'assets/js/theme.js'],
	css: ['assets/css/page.css', 'scss/bootstrap.scss']
};
