import { useState } from "react";

//Array  de objetos contendo o estado inicia do cardapio

const cardapio = [
  {id: 1, nome : "Combo-1", preco: 25.00, disponivel: true, quantidade: 0},
  {id: 2, nome : "Combo-2", preco: 35.00, disponivel: true, quantidade: 0},
  {id: 3, nome : "Combo-3", preco: 45.00, disponivel: false, quantidade: 0},
  {id: 4, nome : "Combo-4", preco: 55.00, disponivel: true, quantidade: 0},
]

const Pedido = () => {

  // HOOK - userState = Manipul o estados da variavel
  // Estudos para gerenciar a lista de items do cardapio

  const [items, setItems] = useState(cardapio);
  const [status, setStatus] = useState(" ");
  const [enviar, setEnviar] = useState(false);

  // Valor fixo adicionado ao total quando existir items no carrino

  const taxaEntrega = 5.00;

  // Função que altera a quantiade do pedido

  const AlterarQuantidade = (id, valor) => {
    setItems(alt => 
      // map , filter, reduce
      // MAP: CRIA O ARRAY R PERCORRE OS ITENS SEM MODIFICAR O ORIGINAL (IMUTABILIDADE)
      alt.map(items => 
        // TERNARIO: verifica se o item de uma interação atual é o que pode ser alterado
        // SPREAD (..items): manter os valores antigos e adiciona novos
        // MATH.MAX: objeto que garante a quantidade nunca seja menor que 0
        items.id === id ? [...items.quantidade, Math.max(0, items.quantidade + valor)]: items
      )

    )
  }

  // FILTER: Seleciona apenas os produtos disponiveis no carrino
  const produtoDisponiveis = items.filter(items => items.disponivel);
  const carrinho =  items.filter(items => items.quantidade > 0);

  // REDUCE: Calcula a soma dos itens (preco + quantidade) > 0 adiciona a taxa de entrega
  const subTotal = carrinho.reduce((act, items) => ac + items.preco * items.quantidade);
  const total = subTotal > 0  ? subTotal + taxaEntrega: 0;
  
  // SIMULAÇÃO DO CICLO DE VIDA DE ENTREGA USANDO TEMPORIZADOR ASSINCRONO
  const ConfirmarPdeido = () => {
      setEnviar(true);
      setStatus("Restaurante Confirmou pagamento, preparando pedido");
      setTimeout(() => {
        setStatus("Seu pedido saiu para entrega");
        setEnviar(false);
      }, 5000);
      setTimeout(() => {
        setStatus("Seu pedido foi entregue com sucesso");
        setEnviar(false);
      }, 10000);
  }

  return (
    <>
      
    </>
  )
}

export default Pedido
