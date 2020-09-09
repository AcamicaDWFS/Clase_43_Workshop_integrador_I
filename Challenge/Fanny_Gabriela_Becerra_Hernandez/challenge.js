const readline = require('readline'),
    separator = '_____\n',

    mainFunction = () => {
        let interface = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            }),

            start = () => {
                interface.question(`${separator}Ingresa el número de posiciones:\n\nSelección: `, function(positions) {
                    let val = parseInt(positions);
                    if (isNaN(val)) {
                        console.log('\n!!!Sólo puedes ingresar números. Intenta nuevamente.');
                        start();
                    } else {
                        fibonacci(val);
                    }
                })
            },

            fibonacci = (positions) => {
                let fibbonacciArray = [],
                    newValue = 0,
                    counter = 0;
                for (let i = 0; i < positions; i = i + 1) {
                    if (counter == 0 || counter == 1) {
                        newValue += 1;
                        fibbonacciArray.push(newValue);
                    } else {
                        newValue += fibbonacciArray[i - 2];
                        fibbonacciArray.push(newValue);
                    }
                    counter++;
                }
                console.log(`La respuesta es: ${fibbonacciArray}`);
                restart();
            },

            restart = () => {
                interface.question(`${separator}Ingresa un número para volver a calcular o presiona cualquier otra tecla para finalizar.\n\nSelección: `, function(selection) {
                    let val = parseInt(selection);
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