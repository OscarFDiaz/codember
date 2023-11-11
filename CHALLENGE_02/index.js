// ** Significado de símbolos: **
// "#" Incrementa el valor numérico en 1.
// "@" Decrementa el valor numérico en 1.
// "*" Multiplica el valor numérico por sí mismo.
// "&" Imprime el valor numérico actual.

// ** Ejemplos de entrada: **
// Entrada: "##*&"
// Salida esperada: "4"
// Explicación: Incrementa (1), incrementa (2), multiplica (4), imprime (4).

// Entrada: "&##&*&@&"
// Salida esperada: "0243"
// Explicación: Imprime (0), incrementa (1), incrementa (2), imprime (2), multiplica (4), imprime (4), decrementa (3), imprime (3).

const message =
  '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

const compiler = (message) => {
  let solution = [];

  let number = 0;
  for (let i = 0; i < message.length; i++) {
    let current = message[i];
    switch (current) {
      case '#':
        number += 1;
        break;
      case '@':
        number -= 1;
        break;
      case '*':
        number *= number;
        break;
      case '&':
        solution.push(number);
        break;
    }
  }

  return solution.join('');
};

console.log(compiler(message));
