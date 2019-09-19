module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "comment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );
  Comment.associate = models => {
    Comment.belongsTo(models.author);
  };
  return Comment;
};
