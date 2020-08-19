module.exports = (sequelize, DataTypes) => {
  const RelatesTo = sequelize.define('relates_to', {
    relation: {
      type: DataTypes.ENUM('match', 'pending', 'declined')
    }
  })

  return RelatesTo;
}