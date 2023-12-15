import express from 'express';
import { produtosEntrada, buscarPorCategoria, buscarPorTermo } from './servico/servico.js';
import cors from 'cors'

const app = express();


app.use(cors());



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





app.listen(5000, () => {
    console.log('Servidor iniciado')
})