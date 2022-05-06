import jwt from 'jsonwebtoken'

const chaveSecreta = 'chave'

const dados = {
    nome: "JM",
    idade: "24" 
}

const token = jwt.sign(dados, chaveSecreta);

console.log(token)

const tokenDecodificado = jwt.verify( token, chaveSecreta)

console.log(tokenDecodificado)