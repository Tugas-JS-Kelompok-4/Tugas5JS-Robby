////    1. Class Method Greeting &
////    2. Membuat Class Turunan dan Dimasukkan ke Dalam Method Greeting
// class Person {                                      // No. 1
//     constructor(nama, kelas, umur, hobi) {
//         this.nama = nama;
//         this.kelas = kelas;
//         this.umur = umur;
//         this.hobi = hobi;
//     }
// }

// class Robby extends Person {                        // No. 2
//     constructor(nama, kelas, umur, hobi, sekolah, alamat) {
//         super(nama, kelas, umur, hobi)
//         this.sekolah = sekolah;
//         this.alamat = alamat;
//     }
   
// greeting() {
//     return (
//         'Namaku ' + 
//         this.nama + 
//         ',\nKelas ' + 
//         this.kelas + 
//         ',\nUmurku ' + 
//         this.umur + 
//         ',\nHobiku ' + 
//         this.hobi +
//         ',\nSekolah di ' +
//         this.sekolah +
//         ',\nTinggal di ' +
//         this.alamat
//         );
//     }
// }

// const Person2 = new Robby('Robby', 11, 17, 'Main Game', 'Yadika', 'Soreang')
// console.log(Person2.greeting());


////    3. Membuat Rumus Segitiga Menggunakan 3 Metode Function

////    Metode Declaration
// function luasSegitiga (alas, tinggi) {
//     console.log(alas * tinggi / 2); 
// }
// luasSegitiga (4, 5)

//// Metode Expression
// let myFunc = function(alas, tinggi) {
//     console.log(alas * tinggi / 2);
// }
// myFunc(10, 5);

//// Metode Arrow Function
// let fungsi = (alas, tinggi) => {
//     console.log(alas * tinggi / 2);
// }
// fungsi(20, 2)


////    4. Membuat Array Bersarang 
// let Family = ['Kakek', 'Nenek',['Ayah', 'Ibu', ['Anak Laki-Laki', 'Anak Perempuan', ['Cucu Laki-Laki', 'Cucu Perempuan']]]]
// // Memanggil Index Yang Berisi 'Cucu Laki-Laki'
// console.log(Family[2][2][2][0]);


////    5. Function Kondisi Lampu Lalu Lintas
// var Lampu = ''
// if (Lampu == 'Merah') {
//     console.log('STOP!!')
// } else if (Lampu == 'Hijau') {
//     console.log('GO!!')
// } else if (Lampu == 'Kuning') {
//     console.log('BE CAREFULL!!')
// } else if (Lampu == 'merah') {
//     console.log('STOP!!')
// } else if (Lampu == 'hijau') {
//     console.log('GO!!')
// } else if (Lampu == 'kuning') {
//     console.log('BE CAREFULL!!')
// } else {
//     console.log('Harap Berhati-Hati Lampu Sedang Mengalami Gangguan');
// }


////    6. Arrow Function 4 Operator Matematika
// let fungsi = (nilai1, nilai2) => {
//     console.log(nilai1 + nilai2);
//     console.log(nilai1 - nilai2);
//     console.log(nilai1 * nilai2);
//     console.log(nilai1 / nilai2);
// }
// fungsi(20, 2);


////    7. Membuat Object didalam Object
// const Family = {
//     orangTua : 'Ayah dan Ibu', 
//     anakAnak : {
//         namaAnak1 : 'Robby',
//         namaAnak2 : 'Ybbor',
//         namaAnak3 : 'Bbyro'
//     }
// }
// console.log(Family.anakAnak.namaAnak3);