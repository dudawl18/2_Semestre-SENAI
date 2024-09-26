/*Leia um número inteiro que representa um código de DDD para discagem interurbana. 
Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:
Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, 
o programa deverá informar: DDD nao cadastrado. A entrada consiste de um único valor inteiro.
Imprima o nome da cidade correspondente ao DDD existente na entrada. 
Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.*/

let cidade;
let ddd = parseInt(prompt('Digite um DDD de discagem interurbana para descobrir qual cidade ele pertence: '));

switch (ddd) {

    case 61:
        cidade = "Brasília";
        alert(`${cidade}`);
        break;

    case 71:
        cidade = "Salvador";
        alert(`${cidade}`);
        break;

    case 11:
        cidade = "São Paulo";
        alert(`${cidade}`);
        break;

    case 21:
        cidade = "Rio de Janeiro";
        alert(`${cidade}`);
        break;

    case 32:
        cidade = "Juiz de Fora";
        alert(`${cidade}`);
        break;

    case 19:
        cidade = "Campinas";
        alert(`${cidade}`);
        break;

    case 27:
        cidade = "Vitoria";
        alert(`${cidade}`);
        break;

    case 31:
        cidade = "Belo Horizonte";
        alert(`${cidade}`);
        break;

    default:
        cidade = "DDD não cadastrado";
        alert(`${cidade}`);
        break;
}