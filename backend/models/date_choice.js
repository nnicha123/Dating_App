module.exports = (sequelize, DataTypes) => {
  const DateChoice = sequelize.define('date_choice', {

  })
  DateChoice.associate = models => {
    DateChoice.hasMany(models.venue, { foreignKey: 'date_choice_id' })
  }

  return DateChoice;
}