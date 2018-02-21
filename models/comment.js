'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    title: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};