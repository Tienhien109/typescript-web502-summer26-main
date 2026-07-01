// Bài 1
function hinhChuNhat(dai: number, rong: number) {
    return {
        chuVi: (dai + rong) * 2,
        dienTich: dai * rong
    };
}


// =======================
// Bài 2
// =======================
function tong(...numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ?? 0;
    }
    return sum;
}

console.log("\nBài 2");
console.log(tong(1, 2, 3, 4, 5));



// Bài 3
function demKyTu(str: string, kyTu: string): number {
    let dem = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == kyTu) {
            dem++;
        }
    }

    return dem;
}

console.log("\nBài 3");
console.log(demKyTu("typescript", "t"));

// bai 4

function laSoNguyenTo(n: number): boolean {

    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

console.log("\nBài 4");
console.log(7, laSoNguyenTo(7));
console.log(10, laSoNguyenTo(10));