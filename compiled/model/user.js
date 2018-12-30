'use strict';

module.exports = function (sequelize, DataTypes) {
	var user = sequelize.define('user', {
		mssv: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		is_active: { type: DataTypes.TINYINT, allowNull: false },
		nick_name: { type: DataTypes.STRING, allowNull: false },
		fb_id: { type: DataTypes.STRING, allowNull: true }

	});
	return user;
};
//# sourceMappingURL=user.js.map