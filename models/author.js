module.exports = (sequelize, DataTypes) => {
  const Author1 = sequelize.define(
    "author",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING
    },
    {
      freezeTableName: true
    }
  );
  Author1.associate = models => {
    Author1.hasMany(models.comment);
  };
  return Author1;
};
