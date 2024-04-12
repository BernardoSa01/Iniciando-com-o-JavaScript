// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
  alert ('Hello World!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
  let num1 = 8
  let num2 = 15

  let sum = num1 + num2
  alert(`A soma entre os números é ${sum}`)
  
//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
  let isNumber = 25

  if (typeof isNumber == 'number') {
    alert('É um número')
  } else {
    alert('Não é um número')
  }
//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
  let isString = 'text'

  if (typeof isString == 'string') {
    alert('É uma string')
  } else {
    alert('Não é uma string')
  }
// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
  let isBoolean = false
  if (typeof isBoolean == 'boolean') {
    alert('É um booleano')
  } else {
    alert('Não é um booleano')
  }

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
  let num3 = 25
  let num4 = 15
  
  let sub = num3 - num4
  alert(`A subtração entre os dois números é ${sub}`)
  
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
  let num5 = 5
  let num6 = 3

  let mult = num5 * num6
  alert(`A multiplicação resulta em ${mult}`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
  const n1 = 32
  const n2 = 4

  const div = n1 / n2
  alert(div)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let number = 54
if (number % 2 ==  0) {
  alert(`${number} é um número par.`)
} else {
  alert(`${number} não é um número par.`)
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let num = 37 
if (num % 2 !== 0) {
  alert(`${num} é um número ímpar`)
} else {
  alert(`${num} não é um número ímpar`)
}