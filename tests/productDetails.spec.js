const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');    
  });

  it('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails('leite', 'alface'))).toBeTruthy();
  });

  it('Verifica se o array contém dois elementos', () => {
    expect(productDetails('leite', 'alface').length).toBe(2);    
  });

  it('Verifica se os dois itens no array são objetos', () => {
    expect(typeof productDetails('leite', 'alface')[0] && typeof productDetails('leite', 'alface')[1]).toBe('object');    
  });

  it('Verifica se os dois itens no array são objetos', () => {
    const teste1 = productDetails('leite', 'alface')[0];
    const teste2 = productDetails('leite', 'alface')[1];
    expect(teste1 !== teste2).toBeTruthy();
  });

  it('Verifica se os dois itens no array são objetos', () => {
    const teste1 = productDetails('leite', 'alface')[0].details.productId;
    const teste2 = productDetails('leite', 'alface')[1].details.productId;
    expect(teste1.endsWith('123') && teste2.endsWith('123')).toBeTruthy();
  });
});
    
    
    