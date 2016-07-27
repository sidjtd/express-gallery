module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    author: DataTypes.STRING,
    image_url: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Post;
};

// module.exports = function(sequelize, DataTypes) {
//   var Post = sequelize.define("Post", {
//     user_id: {type: DataTypes.INTEGER, references: {model : Post, key : 'id'}},
//     image_url: {type: DataTypes.STRING, isUrl: true, allowNull: false},
//     link: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Post;
// };