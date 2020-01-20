export default (sequelize: any, DataTypes: any) => {
  const Post = sequelize.define('Post', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    readingTime: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '3 min'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'es'
    },
    image: {
      type: DataTypes.STRING
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  Post.associate = (models: any) => {
    Post.hasMany(models.Tag, {
      foreignKey: {
        name: 'postId',
        field: 'post_id'
      },
      as: 'tags',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }

  return Post
}
