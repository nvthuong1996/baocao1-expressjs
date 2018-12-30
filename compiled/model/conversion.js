'use strict';

module.exports = function (sequelize, DataTypes) {
	var conversion = sequelize.define('conversion', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: { type: DataTypes.STRING, allowNull: true },
		is_active: { type: DataTypes.TINYINT, allowNull: false },
		type: { type: DataTypes.TINYINT, allowNull: false },
		link_group_lop: { type: DataTypes.STRING, allowNull: true }
	});
	return conversion;
};
//# sourceMappingURL=conversion.js.map