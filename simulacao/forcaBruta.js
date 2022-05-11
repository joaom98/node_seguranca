import { Usuario } from "./usuario.js";

const jm = new Usuario("Joao Manoel", "1337")

console.log(jm)

for (let senhaTeste = 0 ; senhaTeste < 10000 ; senhaTeste++){
    if (jm.autentica("Joao Manoel", senhaTeste.toString())){
        console.log(`Usuário autenticado com senha ${senhaTeste}`)
    }
}