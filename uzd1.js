const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ivestiKrastine(promptTekstas) {
    return new Promise((resolve, reject) => {
        rl.question(promptTekstas, (ilgis) => {
            ilgis = parseFloat(ilgis);
            if (isNaN(ilgis) || ilgis <= 0) {
                console.log("Įveskite teigiamą skaičių.");
                ivestiKrastine(promptTekstas).then(resolve);
            } else {
                resolve(ilgis);
            }
        });
    });
}

function main() {
    console.log("Ši programa skaičiuoja trikampio plotą naudodama Herono formulę.");
    ivestiKrastine("Įveskite pirmos kraštinės ilgį: ").then(a => {
        ivestiKrastine("Įveskite antros kraštinės ilgį: ").then(b => {
            ivestiKrastine("Įveskite trečios kraštinės ilgį: ").then(c => {
                if (a + b > c && a + c > b && b + c > a) {
                    const s = (a + b + c) / 2;
                    const plotas = Math.sqrt(s * (s - a) * (s - b) * (s - c));
                    console.log("Trikampio plotas yra:", plotas);
                } else {
                    console.log("Toks trikampis negali egzistuoti.");
                }
                rl.close();
            });
        });
    });
}

main();
