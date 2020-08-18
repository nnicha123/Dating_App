module.exports = (sequelize, DataTypes) => {
  const RelatesTo = sequelize.define('relates_to', {
    relation: {
      type: DataTypes.ENUM('match', 'likes_you', 'you_like', 'none')
    }
  })

  return RelatesTo;
}