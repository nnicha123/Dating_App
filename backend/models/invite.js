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
  Invite.associate = models => {
    Invite.belongsTo(models.location, { foreignKey: 'location_id' })
    Invite.belongsTo(models.user, { foreignKey: 'receives_invite' })
    Invite.belongsTo(models.user, { foreignKey: 'sends_invite' })
  }

  return Invite;
}