const { autoavaliacao } = require('../routes/autoavaliacaoRoutes')

module.exports = class AutoavaliacaoController{
    static async showAutoavaliacao(req,res){
        res.render('autoavaliacao/home')
    }

    static async autoavaliacao(req,res){

        res.render('autoavaliacao/home',{ autoavaliacao })

    }

    static async showTesteAnsiedade(req,res){
        res.render('autoavaliacao/testeAnsiedade')
    }

    static async testeAnsiedade(req,res){

        res.render('autoavaliacao/testeAnsiedade',{ autoavaliacao })

    }

}