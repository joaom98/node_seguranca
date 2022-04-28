const senhaSecreta = "minhasenhasupersecreta";

console.log(senhaSecreta)

function CifrarMensagem (mensagem, movimentos){
    mensagem = mensagem.split('').map( (caractere) => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode( codigoCaractere + movimentos )
    } )

    return mensagem.join("")
}

const mensagemCifrada = CifrarMensagem(senhaSecreta, 2);

console.log(mensagemCifrada)

function DecifrarMensagem (codigo, movimentos){
    codigo = codigo.split('').map( (caractere) => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode( codigoCaractere - movimentos )
    } )

    return codigo.join("")
}

console.log(DecifrarMensagem(mensagemCifrada, 2))