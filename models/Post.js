module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    author: DataTypes.STRING,
    image_url: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Post;
};