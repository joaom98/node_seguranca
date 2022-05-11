import { createHash } from 'crypto'

export class Usuario {
    constructor(usuario, senha){
        this.usuario = usuario;
        this.hash = this.criaHash(senha);
    }
    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    }
    autentica(usuario, senha){
        if (usuario === this.usuario){
            if (this.hash === this.criaHash(senha) ){
                console.log('Usuário autenticado')
                return true;
            }
        }

        console.log("USUÁRIO NÃO FOI AUTENTICADO")
        return false;
    }
}