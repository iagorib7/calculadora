function calcular() {
  
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado;

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultado = 'Erro:seu pc ira se auto-destruir em 10s';
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = 'Operação inválida';
    }


    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}