module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('feedback', {
    rating: {
      type: DataTypes.FLOAT
    },
    comment: {
      type: DataTypes.STRING(400)
    }
  })

  return Feedback;
}