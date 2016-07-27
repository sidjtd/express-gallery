module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: { type: DataTypes.STRING,
      unique: true,
      allowNull: false },
    email: { type: DataTypes.STRING,
      unique: true, isEmail: true,
      allowNull: false },
    password: { type: DataTypes.STRING,
      allowNull: false }
    }, { classMethods:
      { associate: function(models) {
        User.hasMany(models.Post);
      }
    }
  });
  return User;
};