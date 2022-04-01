#!/usr/bin/env node

import pegaArquivo from './index.js'
import validaURLs from './http-validacao.js'

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminho[3] === 'validar') console.log('Links validados', await validaURLs(resultado));
    else console.log('Lista de links', resultado);
}

processaTexto(caminho);