import { produtos } from "../../dados/dados.js";



export const buscarPorCategoria = (categoria) => {
    return produtos.filter(produto => produto.categoria === categoria)
}

export const buscarPorTermo = (textoDigitado) => {
    return produtos.filter(produto => {
        return (
            produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
        )
    })
}

export const produtosEntrada = buscarPorCategoria('Entradas')

