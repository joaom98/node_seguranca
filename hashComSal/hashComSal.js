import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function hashComSal(senha){
    const sal = randomBytes(16).toString('hex')

    const hashSalgada = scryptSync(senha, sal, 64).toString('hex') 

    return `${sal}:${hashSalgada}`;
}

class Usuario {
    constructor(usuario, senha){
        this.usuario = usuario;
        [this.sal, this.hash] = hashComSal(senha).split(':');
    }

    autentica (usuario, senha){
        if (usuario === this.usuario) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex')

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            if (hashesCorrespondem){
                console.log("Usuário Autenticado!")
                return true;
            }
        }

        console.log("Autenticação falhou")
        return false;
    }
}

const pessoa = new Usuario('Camis', 'borboleta')

// Caso de sucesso
pessoa.autentica('Camis', 'borboleta')

// Falha
pessoa.autentica('Cams', 'borboleta')
pessoa.autentica('Camis', 'boleta')