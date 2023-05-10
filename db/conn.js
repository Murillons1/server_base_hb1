const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bd_dados',"root","senai",{
    host: "Localhost",
    dialect:"mysql"
})

// sequelize.authenticate().then(()=>{
//     console.log("conexão realizada com sucesso ...")
// }).catch((error)=>{
//     console.error("Não foi possivel realizar o BD ...")
// })

module.exports = sequelize