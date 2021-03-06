module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post', {
        texto: DataTypes.STRING,
        img: DataTypes.STRING,
        usuarios_id: DataTypes.INTEGER,
        n_likes: DataTypes.INTEGER
    }, 
    {
        tableName: "posts",
        timestamps: false
    }
    );
    Post.associate = (models) =>{
        // relaçao N:1 (varios posts de 1 usuario) usa-se belongsTo
        Post.belongsTo(models.Usuario, {as: "usuario", foreignKey: 'usuarios_id'});
    }
    Post.associate = (models) =>{
        // relaçao N:1 (varios posts de 1 usuario) usa-se belongsTo
        Post.hasMany(models.Comentario, {as: "comentario", foreignKey: 'posts_id'});
    }

    return Post;
}
