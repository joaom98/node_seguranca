import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

const mensagem = 'curso de node.js'
const chave = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv('aes256', chave, vi);

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') +
 cifra.final('hex');

console.log(`Cifrado: ${mensagemCifrada}`)


// Simulando uma transmissão --------------------------------

const decifra = createDecipheriv('aes256', chave, vi);
const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8')+
decifra.final('utf-8');

console.log(`Decifrado: ${mensagemDecifrada.toString('utf-8')}`)