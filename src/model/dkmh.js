module.exports = function (sequelize,DataTypes){
	var dkmh = sequelize.define('dkmh',{
		id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
	    mssv: {type: DataTypes.STRING, allowNull: false},
	    mdk: {type: DataTypes.STRING, allowNull: false}
	});
	return dkmh;
}