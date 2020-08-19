module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    name: {
      type: DataTypes.STRING(400)
    },
    image: {
      type: DataTypes.STRING(400)
    },
    address: {
      type: DataTypes.STRING(400)
    },
    price: {
      type: DataTypes.FLOAT
    }
  })
  Location.associate = models => {
    Location.belongsTo(models.venue, { foreignKey: 'venue_id' })
    Location.hasOne(models.invite, { foreignKey: 'location_id' })
    Location.belongsToMany(models.user, { through: models.feedback, foreignKey: 'location_id' })
  }
  return Location;
}