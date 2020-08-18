module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('venue', {
    relation: {
      type: DataTypes.ENUM('match', 'likes_you', 'you_like', 'none')
    }
  })

  return Venue;
}