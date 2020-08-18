module.exports = (sequelize, DataTypes) => {
  const Invite = sequelize.define('invite', {
    status: {
      type: DataTypes.ENUM('pending', 'accepted', 'declined')
    },
    time: {
      type: DataTypes.STRING(400)
    },
    date: {
      type: DataTypes.STRING(400)
    }
  })

  return Invite;
}