const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      healthscore: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      steps: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // diets: {},
      createdInDb: {
        type: DataTypes.BOOLEAN, //es una columna adicional que representa si la receta fue creada en la base de datos.
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false, // indica que no se deben agregar automáticamente las columnas createdAt y updatedAt al modelo Recipe
    }
  );
};
