const fetch = (...args) => 
    import('node-fetch').then(({default: fetch}) =>
        fetch(...args));

export default async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);

    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto, 
        status: statusLinks[indice]
    }))

    return resultados;
}

function geraArrayDeURLs(arrayLinks) {
    return arrayLinks
        .map(indice => Object
            .values(indice).join())
}

async function checaStatus(arrayLinks) {
    try {
        const arrayStatus = await Promise
            .all(arrayLinks
                .map(async url => {
            const res = await fetch(url)
            return `${res.status} - ${res.statusText}`;
        }))

        return arrayStatus;
    } catch (erro) {
        manejaErros(erro);
    }
}

function manejaErros(erro) {
    throw new Error(erro.message);
}