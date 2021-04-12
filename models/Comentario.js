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
    return Comentario;   
    
}