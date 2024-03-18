const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function laikrodisPoSekundes(valandos, minutes, sekundes) {
    let naujosSekundes = (sekundes + 1) % 60;
    let naujosMinutes = minutes;
    let naujosValandos = valandos;

    if (sekundes + 1 >= 60) {
        naujosMinutes = (minutes + 1) % 60;
        if (minutes + 1 >= 60) {
            naujosValandos = (valandos + 1) % 24;
        }
    }

    return [naujosValandos, naujosMinutes, naujosSekundes];
}

function main() {
    rl.question("Įveskite valandas: ", (valandos) => {
        rl.question("Įveskite minutes: ", (minutes) => {
            rl.question("Įveskite sekundes: ", (sekundes) => {
                valandos = parseInt(valandos);
                minutes = parseInt(minutes);
                sekundes = parseInt(sekundes);

                const [naujosValandos, naujosMinutes, naujosSekundes] = laikrodisPoSekundes(valandos, minutes, sekundes);
                console.log(`Po sekundės laikrodis rodytų: ${naujosValandos} val., ${naujosMinutes} min., ${naujosSekundes} sek.`);
                rl.close();
            });
        });
    });
}

main();
