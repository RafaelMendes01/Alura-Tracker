const projeto = {
    id: 1,
    descricao: 'alura tracker 3.0'
}

const proxy = new Proxy(projeto, {
    get(objetoOriginal, chave){
        console.log(`alguem pediu a chave: ${chave} do projeto`);
        return objetoOriginal[chave];
    },
    set(objetoOriginal, chave, valor){
        console.log(`alguem alterou a chave: ${chave} do projeto para o valor: ${valor}`);
        objetoOriginal[chave]= valor;
    }
})

proxy.descricao = "reatividade e mega bacana"

console.log(proxy.descricao)