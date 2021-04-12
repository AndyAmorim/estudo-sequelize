const {Usuario, Post, Comentario , sequelize} = require('./models');
const{Op} = require('sequelize');

// Usuario.findAll()
// .then((resultado) =>{
//     console.log(resultado);
// });


// Usuario.findAll(({
//     where:{
//         nome :{ [Op.like] : '%a%'}
//         }
// }))
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });


// Post.findAll({
//     where:{
//         texto: {[Op.like]: 'oi'}
//     }
// })
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['id', 'DESC']],
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((comment) => comment.toJSON()));
//     });
//   }

// Usuario.create({
//     nome: 'Anderson',
//     email:'Andsu@digitalhouse.com',
//     senha: 'next1234'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })


// Post.create({
//     texto: 'Nex School é TOP',
//     img:'Fotinha Irada',
//     n_likes: 2,
//     where: {
//         usurarios_id: 1,
//     }

// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         nome: 'Sergio siqueira'
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.findByPk(1, {
//     include:[
//         {association:"pots"}
//     ]
// })
// .then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()))
// })

     // outra forma
// Usuario.findByPk(1,{include: ['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )    

Post.findByPk(1,{include: ['comentario']}).then(
    post => {
        console.log(post.toJSON());
        sequelize.close();
    }
)    
