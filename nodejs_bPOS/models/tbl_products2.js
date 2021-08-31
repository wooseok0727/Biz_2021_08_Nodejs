module.exports = (sequelize, DateTypes) => {
  // tbl_product가 table의 이름(변수, 객체)
  // tbl_product.findAll()... 처럼 사용한다.
  // tbl_products.findAll() 처럼 사용금지!!!
  const product2s = sequelize.define(
    "tbl_product2s",
    {
      p_code: {
        type: DateTypes.STRING(5),
        primaryKey: true,
      },
      p_name: {
        type: DateTypes.STRING,
        allowNull: false, // NOT NULL
      },
      p_price: {
        type: DateTypes.INTEGER,
        allowNull: false,
      },
      p_rem: { type: DateTypes.STRING },
    },
    { timestamps: false }
  );
  return product2s;
};
