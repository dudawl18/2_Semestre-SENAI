/*Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. 
A seguir, calcule e mostre o valor da conta a pagar. 
O arquivo de entrada contém dois valores inteiros correspondentes ao código 
e à quantidade de um item conforme tabela acima. O arquivo de saída deve conter a mensagem "Total: R$ " 
seguido pelo valor a ser pago, com 2 casas após o ponto decimal.*/

let preco
let codigo
let quantidadeItem
let totalAPagar

codigo = parseInt(prompt('Digite o código do produto desejado:\n\n1- Cachorro Quente R$4.00\n2- X-Salada R$4.50\n3- X-Bacon R$5.00\n4- Torrada simples R$2.00\n5- Refrigerante R$1.50'))

switch (codigo) {
    case 1:
        preco = 4.00
        quantidadeItem = parseInt(prompt('Digite a quantdade desejada: '))
        totalAPagar = preco * quantidadeItem
        alert(`Total: R$${totalAPagar.toFixed(2)}`)
        break

    case 2:
        preco = 4.50
        quantidadeItem = parseInt(prompt('Digite a quantdade desejada: '))
        totalAPagar = preco * quantidadeItem
        alert(`Total: R$${totalAPagar.toFixed(2)}`)
        break

    case 3:
        preco = 5.00
        quantidadeItem = parseInt(prompt('Digite a quantdade desejada: '))
        totalAPagar = preco * quantidadeItem
        alert(`Total: R$${totalAPagar.toFixed(2)}`)
        break

    case 4:
        preco = 2.00
        quantidadeItem = parseInt(prompt('Digite a quantdade desejada: '))
        totalAPagar = preco * quantidadeItem
        alert(`Total: R$${totalAPagar.toFixed(2)}`)
        break

    case 5:
        preco = 1.50
        quantidadeItem = parseInt(prompt('Digite a quantdade desejada: '))
        totalAPagar = preco * quantidadeItem
        alert(`Total: R$${totalAPagar.toFixed(2)}`)
        break
}