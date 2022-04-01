// import chalk from 'chalk';
import fs from 'fs';

console.log('começando o programa...');

const regEx = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;

// a lib chalk destaca textos no nosso console
// https://www.npmjs.com/package/chalk
// chalk só pode esr importado dessa maneira, e devemos add uma linha de comando no package.json. 'type': 'module'

function trataErro(erro) {
    throw new Error(erro.code, 'não há arquivo no caminho');
}

function extraiLink(texto, regex) {
    const arrayResultados = [];
    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] });
    }

    return arrayResultados.length === 0 ? 'não há links no texto informado' : arrayResultados;
}

//     // Se chama promessa pcausa do sentido literal da palavra, o js ESPERA algo do futuro.
// }

export default async function pegaArquivo(caminho) {
    try {
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminho, encoding)
        return extraiLink(texto, regEx);   
    } catch (erro) {
        trataErro(erro)
    }
}
