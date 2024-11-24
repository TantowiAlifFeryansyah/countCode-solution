function countCode(str) {
    // Buat variabel buat nyimpen jumlah pola "co_e"
    let count = 0;

    // Looping untuk cek setiap 4 huruf di string
    for (let i = 0; i < str.length - 3; i++) {

        // Cek apakah sesuai pola "co_e"
        if (str[i] === 'c' && str[i + 1] === 'o' && str[i + 3] === 'e') {

            // Jika pola cocok, tambahin ke count
            count++;
        }
    }

    // Kemablikan jumlah pola
    return count;
}

// Input contoh
const input1 = 'aaacodebbb';
const input2 = 'codexxcode';
const input3 = 'cozexxcope';

// Output hasil
console.log(`Output: ${countCode(input1)}`);
console.log(`Output: ${countCode(input2)}`);
console.log(`Output: ${countCode(input3)}`);
