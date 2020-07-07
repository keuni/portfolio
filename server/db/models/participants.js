'use strict';
module.exports = (sequelize, DataTypes) => {
  const participants = sequelize.define('participants', {
    job: DataTypes.STRING,
    ability: DataTypes.STRING,
    company: DataTypes.INTEGER,
    developer: DataTypes.INTEGER,
    interest: DataTypes.BOOLEAN,
  });
  return participants;
};
