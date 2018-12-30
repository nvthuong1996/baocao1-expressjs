'use strict';

module.exports = function (sequelize, DataTypes) {
  var monhoc = sequelize.define('monhoc', {
    mdk: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    msmh: { type: DataTypes.STRING, allowNull: true },
    tenmonhoc: { type: DataTypes.STRING, allowNull: false },
    nhommonhoc: { type: DataTypes.TINYINT, allowNull: false },
    nhomthuchanh: { type: DataTypes.TINYINT, allowNull: true },
    data: { type: DataTypes.TEXT, allowNull: false },
    conversion_id: { type: DataTypes.INTEGER, allowNull: true }
  });
  return monhoc;
};
//# sourceMappingURL=monhoc.js.map