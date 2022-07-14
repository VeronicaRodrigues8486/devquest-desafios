/*Criando mais de uma função.
Com os conhecimentos adquiridos na aula de funções crie uma função para cada operação matemática (soma, divisão, multiplicação e subtração)

Exemplo:
function somar(numero1, numero2) {
let soma = numero1 + numero2;
return 'A soma dos dois números é: ' + soma;
}

Realize a chamada de cada função, colocando cada resultado em uma variável e mostre a resposta usando o console.log.
*/


//soma
function somar(n1=0, n2=0) {
    return ('A soma dos dois números é: ') + (n1 + n2);
}

    let resultadoSoma = somar(1, 8)
    console.log(resultadoSoma);


//multiplicação
function multiplicar(n1=0, n2=0) {
    return ('A multiplicação dos dois números é: ') + (n1 * n2);
}

    let resultadoMultiplicacao = multiplicar(2, 7)
    console.log(resultadoMultiplicacao);


//subtração
function subtrair(n1=0, n2=0) {
    return ('A subtração dos dois números é: ') + (n1 - n2);
}

    let resultadoSubtracao = subtrair(10, 8)
    console.log(resultadoSubtracao)

//divisão
function divisao(n1=0, n2=0) {
    return ('A divisão dos dois números é: ') + (n1 / n2);
}

    let resultadoDivisao = divisao(50, 2)
    console.log(resultadoDivisao)