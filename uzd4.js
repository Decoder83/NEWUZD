function arArmstrongoSkaicius(skaicius) {
    const skaiciausStringas = skaicius.toString();
    const ilgis = skaiciausStringas.length;
    let suma = 0;

    for (let i = 0; i < ilgis; i++) {
        suma += Math.pow(parseInt(skaiciausStringas[i]), ilgis);
    }

    return suma === skaicius;
}

function rastiArmstrongoSkaicius() {
    const armstrongoSkaiciai = [];

    for (let i = 100; i <= 999; i++) {
        if (arArmstrongoSkaicius(i)) {
            armstrongoSkaiciai.push(i);
        }
    }

    return armstrongoSkaiciai;
}

const armstrongoSkaiciai = rastiArmstrongoSkaicius();
console.log("Armstrongo skaičiai intervale nuo 100 iki 999:", armstrongoSkaiciai);
