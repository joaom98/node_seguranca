import { createHash } from 'crypto'

function hash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

class Usuario {
    constructor(usuario, senha){
        this.usuario = usuario;
        this.hash = hash(senha);
    }

    autentica(usuario, senha){
        if (usuario === this.usuario){
            if (this.hash === hash(senha) ){
                console.log('Usuário autenticado')
                return true;
            }
        }

        console.log("USUÁRIO NÃO FOI AUTENTICADO")
        return false;
    }
}

let pessoa = new Usuario('jm', 'senhaSuperSecreta')

console.log(pessoa)

// Caso de sucesso
pessoa.autentica('jm', 'senhaSuperSecreta')

// Casos de insucesso
pessoa.autentica('jotam', 'senhaSuperSecreta')

pessoa.autentica('jm', 'SenhaSuperSecreta')