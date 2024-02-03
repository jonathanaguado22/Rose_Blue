const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^\+?[0-9\-()\s]+$/,
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["SuperAdmin", "Admin", "User"],
        defaultValue: "User",
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
