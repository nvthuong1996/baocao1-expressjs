'use strict';

module.exports = function (sequelize, DataTypes) {
	var qldt_account = sequelize.define('qldt_account', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		ten_sv: { type: DataTypes.STRING, allowNull: false },
		gioi_tinh: { type: DataTypes.STRING, allowNull: false },
		ngay_sinh: { type: DataTypes.DATE, allowNull: false },
		noi_sinh: { type: DataTypes.STRING, allowNull: false },
		lop: { type: DataTypes.STRING, allowNull: false },
		nganh: { type: DataTypes.STRING, allowNull: false },
		khoa: { type: DataTypes.STRING, allowNull: false },
		he_dao_tao: { type: DataTypes.STRING, allowNull: false },
		khoa_hoc: { type: DataTypes.STRING, allowNull: false }

	});
	return qldt_account;
};
//# sourceMappingURL=qldt_account.js.map