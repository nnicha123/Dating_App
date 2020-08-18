module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    image: {
      type: DataTypes.STRING(400)
    }
  })

  return Location;
}