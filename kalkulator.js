class kalkulator{
    add({ num1, num2}){
        const result = num1 + num2;
        console.log(`wynik dodawania: ${num1} + ${num2} = ${result}`);
        return result
    }

    substract({num1, num2}){
        const result = num1 - num2;
        console.log(`wynik odejmowania: ${num1} - ${num2} = ${result}`);
        return result
    }

    multiplay({ num1, num2}){
        const result = num1 * num2;
        console.log(`wynik mnożenia: ${num1} * ${num2} = ${result}`);
        return result
    }
    divide({num1, num2}){
        if (num1 ===0 ||num2 === 0) {
            console.log("Nie da się dzielić przez 0");
            return null;
          }
          const result = num1 / num2;
          console.log(`Wynik dzielenia: ${num1} / ${num2} = ${result}`);
          return result;
      
    }

}


const kalkulator1 = new kalkulator();
const addResult = kalkulator1.add({ num1: 10, num2: 5 });
const subtractResult = kalkulator1.substract({ num1: 10, num2: 5 });
const multiplyResult = kalkulator1.multiplay({ num1: 10, num2: 5 });
const divideResult = kalkulator1.divide({ num1: 10, num2: 5 });

const divideByZeroResult = kalkulator1.divide({ num1: 10, num2: 0 });