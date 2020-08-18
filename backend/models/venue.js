module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('venue', {
    category: {
      type: DataTypes.STRING(400)
    }
  })
  Venue.associate = models => {
    Venue.belongsTo(models.date_choice, { foreignKey: 'date_choice_id' })
    Venue.hasMany(models.location, { foreignKey: 'venue_id' })
  }
  return Venue;
}