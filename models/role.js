'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'roles',
    underscored: true
  });
  
  Role.associate = function(models) {
    Role.hasMany(models.User, { foreignKey: 'role_id' });
  };
  
  return Role;
};
