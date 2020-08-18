module.exports = (sequelize, DataTypes) => {
  const ProfileComment = sequelize.define('profile_comment', {
    comment: {
      type: DataTypes.STRING(400)
    },
    date: {
      type: DataTypes.STRING(400)
    },
    image: {
      type: DataTypes.STRING(500)
    },
    no_of_likes: {
      type: DataTypes.INTEGER
    }
  })

  return ProfileComment;
}