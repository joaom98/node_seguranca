import { generateKeyPairSync , createSign, createVerify} from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync(
    'rsa', {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)

let dados = "Uma string para ser assinada!"

const assinador = createSign('rsa-sha256')

assinador.update(dados)

dados += "asd"

const assinatura = assinador.sign(privateKey, 'hex')

// ---- Transmitindo documento, chave pública e assinatura ----------------

const verificador = createVerify('rsa-sha256')

verificador.update(dados)

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex')

console.log(ehVerificado)