import { Usuario } from "./usuario.js";

const jm = new Usuario('Joao Manoel', "admin")

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

senhasComuns.map( senha => {
    if ( jm.autentica('Joao Manoel', senha) ){
        console.log(`Usuario autenticado com a senha ${senha}`)
    }
})