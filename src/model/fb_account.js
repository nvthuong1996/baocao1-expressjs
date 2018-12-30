module.exports = function (sequelize,DataTypes){
	var fb_account = sequelize.define('fb_account',{
		id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
	    name: {type: DataTypes.STRING, allowNull: false},
	    first_name: {type: DataTypes.STRING, allowNull: false},
	    last_name: {type: DataTypes.STRING, allowNull: false},
	    profile_pic: {type: DataTypes.STRING, allowNull: false},
	    locale: {type: DataTypes.STRING, allowNull: false},
	    timezone: {type: DataTypes.STRING, allowNull: false},
	    gender: {type: DataTypes.STRING, allowNull: false},

	});
	return fb_account;
}