// 게시판의 댓글을 저장할 table
module.exports = (sequelize, DataTypes) => {
  const replys = sequelize.define("tbl_replys", {
    r_postId: { type: DataTypes.INTEGER, allowNull: false },
    r_writer: { type: DataTypes.STRING, allowNull: false },
    r_content: { type: DataTypes.TEXT, allowNull: false },
  });

  // tbl_reply와 tbl_bbs를 FK 설정을 수행하기
  replys.associate = (models) => {
    replys.belongsTo(models.tbl_bbs);
  };
  return replys;
};
