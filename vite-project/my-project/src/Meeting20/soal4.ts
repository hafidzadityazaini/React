class Mobil {
    merk: string;
    tahun: number;
    constructor(merk: string, tahun: number) {
        this.merk = merk;
        this.tahun = tahun;
    }
    info(): string {
        return `Mobil ini adalah ${this.merk}, tahun ${this.tahun}.`;
    }
}
// Contoh penggunaan:
const mobil1 = new Mobil("Toyota", 2020);
console.log(mobil1.info()); 