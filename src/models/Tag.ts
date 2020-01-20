export default (sequelize: any, DataTypes: any) => {
  const Tag = sequelize.define('Tag', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return Tag
}
