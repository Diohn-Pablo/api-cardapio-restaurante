import express from 'express';
import { produtosEntrada, buscarPorCategoria, buscarPorTermo } from './servico/servico.js';

const app = express();




app.get('/produtos', (req,res) => {
    const termo = req.query.busca;
    const resultadoBusca = termo ? buscarPorTermo(termo) : produtosEntrada;

    if (resultadoBusca.length > 0) {
        res.json(resultadoBusca);
    } else {
        res.status(404).send({'Erro': 'Não foi possível localizar'})
    }
})

app.get('/produtos/categoria/:categoria', (req,res) => {
    const categoria = req.params.categoria;
    const produtosFiltrados = buscarPorCategoria(categoria)
    res.json(produtosFiltrados)
})





app.listen(3000, () => {
    console.log('Servidor iniciado')
})