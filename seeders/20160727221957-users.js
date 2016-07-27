'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{ username : `joe`, email : `a@b.c`, password : `hello`, createdAt : new Date(), updatedAt : new Date() }, { username : `ed`, email : `b@c.d`, password : `hello`, createdAt : new Date(), updatedAt : new Date() }, { username : `al`, email : `c@d.e`, password : `hello`, createdAt : new Date(), updatedAt : new Date() }, { username : `sam`, email : `d@e.f`, password : `hello`, createdAt : new Date(), updatedAt : new Date() }, { username : `bob`, email : `e@f.g`, password : `hello`, createdAt : new Date(), updatedAt : new Date() }], {});
  },
  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', [{ email : `a@b.c` }, { email : `b@c.d` }, { email : `c@d.e` }, { email : `d@e.f` }, { email : `e@f.g`}]);
  }
};