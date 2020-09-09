const readline = require('readline'),

    mainFunction = () => {
        let interface = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            }),

            start = () => {
                interface.question(`___\nIngresa el número de posiciones:\n\nSelección: `, function(positions) {
                    let val = parseInt(positions);
                    console.log('positions: ', positions);
                    console.log('val: ', val);
                    if (isNaN(val)) {
                        console.log('\n!!!Sólo puedes ingresar números. Intenta nuevamente.');
                        start();
                    } else {
                        fibonacci(val);
                    }
                })
            },

            fibonacci = (positions) => {
                console.log('positions: ', positions);
                let fibbonacciArray = [],
                    newValue = 0,
                    counter = 0;
                for (let i = 0, j = i < positions; j; i = i + 1) {
                    console.log('fibbonacciArray: ', fibbonacciArray);
                    if (counter == 0 || counter == 1) {
                        newValue += 1;
                        fibbonacciArray.push(newValue);
                    } else {
                        newValue += fibbonacciArray[i - 2];
                        fibbonacciArray.push(newValue);
                    }
                    counter++;
                }
                return console.log(`La respuesta es: ${fibbonacciArray}`);
                restart();
            },

            restart = () => {
                interface.question(`Ingresa un número para volver a calcular o presiona cualquier otra tecla para finalizar.\n\nSelección: `, function(selection) {
                    let val = parseInt(selection);
                    console.log('positions: ', positions);
                    if (isNaN(val) && val != null) {
                        interface.close();
                    } else if (!isNaN(val)) {
                        mainFunction();
                    }
                })
            }

        interface.on('close', function() {
            process.exit(0);
        });

        start();
    }

mainFunction();