'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [{ author : `Joe`, link : `https://upload.wikimedia.org/wikipedia/bar/thumb/2/27/Hello_Kitty_logo.svg/2000px-Hello_Kitty_logo.svg.png`, site : `flickr.com` , description : `Here's a thing!` }, { author : `me`, link : `http://assets.dwell.com/sites/default/files/styles/article_photo/public/amaroso39665.jpg`, site : `dwell.com` , description : `picture of a house` }, { author : `me` , link : `https://eggerapps.at/postico/img/icon_256x256.png`, site : `eggerapps.at` , description : `elephant icon` }, { author : `rick`, link : `https://img.buzzfeed.com/buzzfeed-static/static/2015-02/27/15/enhanced/webdr14/anigif_enhanced-14643-1425068912-32.gif`, site : `buzzfeed.com` , description : `Never gonna give you up` }, { author : `Ed Pokemon`, link : `http://kocham.org/wp-content/uploads/2012/04/1532.jpg`, site : `flickr.com` , description : `Shay Maria, modeling glasses` }, { author : `sgnl` , link : `http://iv1.lisimg.com/image/5081453/488full-francoise-boufhal.jpg`, site : `thechive.com` , description : `Francoise Boufhal` }], {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Posts', [{ link : `http://assets.dwell.com/sites/default/files/styles/article_photo/public/amaroso39665.jpg` }, { link : `https://eggerapps.at/postico/img/icon_256x256.png` }, { link : `https://img.buzzfeed.com/buzzfeed-static/static/2015-02/27/15/enhanced/webdr14/anigif_enhanced-14643-1425068912-32.gif` }, { link : `http://kocham.org/wp-content/uploads/2012/04/1532.jpg` }, { link : `http://iv1.lisimg.com/image/5081453/488full-francoise-boufhal.jpg` }]);
  }
};