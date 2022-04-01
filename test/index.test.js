import pegaArquivo from '../index.js'

const resultadoEsperado = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => expect(typeof pegaArquivo).toBe('function'))
    it('deve retornar array com objeto', async () => {
        const resultado = await pegaArquivo('C:/Users/Pedro/Documents/ALURA-minhaMaquina/ALURA/nodejs-criando-lib/test/arquivos/texto1.md')
        expect(resultado).toEqual(resultadoEsperado);
    })
    it('deve retornar "não há links no texto informado" quando o pegaArquivo acessa um texto sem links', async () => {
        const resultado = await pegaArquivo('C:/Users/Pedro/Documents/ALURA-minhaMaquina/ALURA/nodejs-criando-lib/test/arquivos/texto1_semLinks.md')
        expect(resultado).toBe('não há links no texto informado');
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('C:/Users/Pedro/Documents/ALURA-minhaMaquina/ALURA/nodejs-criando-lib/test/arquivos/')).rejects.toThrow(Error)
    })
})
