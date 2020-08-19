module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('venue', {
    category: {
      type: DataTypes.STRING(400)
    }
  })
  Venue.associate = models => {
    Venue.hasMany(models.location, { foreignKey: 'venue_id' })
  }
  return Venue;
}