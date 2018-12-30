'use strict';

module.exports = function (sequelize, DataTypes) {
	var message = sequelize.define('message', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		creator_id: { type: DataTypes.STRING, allowNull: false },
		message_body: { type: DataTypes.TEXT, allowNull: false },
		conversion_id: { type: DataTypes.INTEGER, allowNull: false },
		is_reader: { type: DataTypes.BOOLEAN, defaultValue: false }

	});
	return message;
};
//# sourceMappingURL=message.js.map