const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Score extends Model {}

Score.init({
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},{
  sequelize,
  tableName: "score"
});

module.exports = Score;