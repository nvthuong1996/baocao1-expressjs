'use strict';

module.exports = function (sequelize, DataTypes) {
	var user_conversion = sequelize.define('user_conversion', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		user_id: { type: DataTypes.STRING, allowNull: false },
		conversion_id: { type: DataTypes.INTEGER, allowNull: false },
		is_active: { type: DataTypes.TINYINT, allowNull: false },
		access: { type: DataTypes.STRING, allowNull: false }
	});
	return user_conversion;
};
//# sourceMappingURL=user_conversion.js.map