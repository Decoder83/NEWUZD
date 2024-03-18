const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nustatytiOlimpiniuZaidyniuNumeri(metai) {
    const metaiPradzia = 1896;
    let numeris = Math.floor((metai - metaiPradzia) / 4) + 1;

    // Patikriname, ar metai tiksliai sutinka su olimpinio žaidynių ciklo pradžia
    if ((metai - metaiPradzia) % 4 === 0) {
        numeris -= 1;
    }

    return numeris;
}

function arOlimpiniaiMetai(metai) {
    const metaiPradzia = 1896;
    return (metai - metaiPradzia) % 4 === 0;
}

function main() {
    rl.question("Įveskite metus: ", (metai) => {
        metai = parseInt(metai);
        if (arOlimpiniaiMetai(metai)) {
            const numeris = nustatytiOlimpiniuZaidyniuNumeri(metai);
            console.log(`${metai} metai buvo olimpiniai, tai buvo ${numeris}-osios olimpinės žaidynės.`);
        } else {
            console.log(`${metai} metai nebuvo olimpiniai.`);
        }
        rl.close();
    });
}

main();
