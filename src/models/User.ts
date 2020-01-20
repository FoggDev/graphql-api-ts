import { encrypt } from 'fogg-utils'

export default (sequelize: any, DataTypes: any) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'The user just accepts alphanumeric characters'
        },
        len: {
          args: [4, 20],
          msg: 'The username must be from 4 to 20 characters'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email'
        }
      }
    },
    privilege: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user'
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    hooks: {
      beforeCreate: (user: any) => {
        user.password = encrypt(user.password)
      }
    }
  })

  User.associate = (models: any): void => {
    User.hasMany(models.Post, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      as: 'posts'
    })
  }

  return User
}
