module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING(50),
      unique: true
    },
    password: {
      type: DataTypes.STRING(200)
    },
    email: {
      type: DataTypes.STRING(100)
    },
    first_name: {
      type: DataTypes.STRING(50)
    },
    last_name: {
      type: DataTypes.STRING(50)
    },
    profile_pic: {
      type: DataTypes.STRING(500)
    },
    cover_pic: {
      type: DataTypes.STRING(500)
    },
    about_me: {
      type: DataTypes.STRING(1000)
    },
    total_hearts: {
      type: DataTypes.INTEGER
    },
    user_type: {
      type: DataTypes.ENUM('normal', 'starred')
    },
    role:{
      type:DataTypes.ENUM('user','admin')
    }
  })

  User.associate = models => {
    User.belongsToMany(models.user, {
      through: models.relates_to,
      as: "requester",
      foreignKey: "requester_id"
    })
    User.belongsToMany(models.user, {
      through: models.relates_to,
      as: "responder",
      foreignKey: "responder_id"
    })

    User.belongsToMany(models.user, {
      through: models.profile_comment,
      as: "commenter",
      foreignKey: "commenter_id"
    })
    User.belongsToMany(models.user, {
      through: models.profile_comment,
      as: "receiver",
      foreignKey: "receiver_id"
    })
    User.belongsToMany(models.location, { through: models.feedback, foreignKey: 'user_id' })
    User.hasMany(models.invite, { foreignKey: 'receives_invite' })
    User.hasMany(models.invite, { foreignKey: 'sends_invite' })
  }

  return User;
}