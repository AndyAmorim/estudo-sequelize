module.exports = (sequelize, DataTypes) =>{

    // define(NomeModel, colunas, configuraçoes)
    const Usuario= sequelize.define(
        'Usuario',{
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        },{
            tableName:  "usuarios",
            timestamps: false
        }
    );
    Usuario.associate = (models) =>{
        // relaçao 1:N (usuario tem varios posts)  usa-se hasMany
        Usuario.hasMany(models.Post, {as: "posts", foreignKey: 'usuarios_id'});
    }
    return Usuario;   
    
}