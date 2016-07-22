module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    author: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User);
      }
    }
  });
  return Task;
};