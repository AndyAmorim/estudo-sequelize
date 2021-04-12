module.exports = (sequelize, DataTypes) =>{

    // define(NomeModel, colunas, configuraçoes)
    const Comentario= sequelize.define(
        'Comentario',{
            texto: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER
        },{
            tableName:  "comentarios",
            timestamps: false
        }
    )
    Comentario.associate = (models) =>{
        // relaçao 1:N (usuario tem varios posts)  usa-se hasMany
        Comentario.belongsTo(models.Post, {as: "posts", foreignKey: 'posts_id'});
    }
    return Comentario;   
    
}