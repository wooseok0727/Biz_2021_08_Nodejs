module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    "tbl_products",
    {
      p_code: {
        type: DataTypes.STRING(5),
        primaryKey: true,
      },
      p_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      p_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      p_rem: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );

  return products;
};
