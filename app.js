const sequelize = require('sequelize');
const config = require('./config/config');  //configuraçoes do banco de dados
const conexaoDB= new sequelize(config);

conexaoDB.query('SELECT * FROM pets', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log(data);
    conexaoDB.close(); // comando para fechar a conexao, pois ele aberto é uma falha de segurança
})
.catch((error) =>{ 
    console.log(error)

});
