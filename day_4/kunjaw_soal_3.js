/**
 * Bu Wati selalu berbelanja ke pasar setiap pagi.
 * Setelah dari pasar, Bu Wati mendapatkan bahan-bahan masakan sebagai berikut
 */

 let bahan_masakan = [
  {
    tipe: "bumbu dapur",
    isi: [
      "bawang merah",
      "bawang putih",
      "ketumbar",
      "gula",
      "garam",
      "lada"
    ]
  },
  {
    tipe: "sayuran",
    isi: [
      "wortel",
      "sawi",
      "kembang kol",
      "jagung",
      "buncis",
      "daun bawang"
    ]
  },
  {
    tipe: "lauk",
    isi: [
      "tahu",
      "tempe",
      "daging sapi",
      "daging ayam"
    ]
  }
]


/**
 * Bu Wati melihat resep untuk membuat sop, dan resepnya adalah
 * - 2 siung bawang putih
 * - 1 wortel
 * - 1 sawi
 * - 1 buncis
 * - kaldu daging ayam
 */

/**
 * Lengkapi potongan resep berikut (berdasarkan
 * resep di atas) dengan menuliskan indeks yang tepat
 */


console.log(
  `
    - 2 siung ${bahan_masakan[0].isi[1]}
    - 1 ${bahan_masakan[1].isi[0]}
    - 1 ${bahan_masakan[1].isi[1]}
    - 1 ${bahan_masakan[1].isi[4]}
    - kaldu ${bahan_masakan[2].isi[3]}
  `
)


/**
 * Kemudian, Bu Wati ingin membuat semur ayam, tapi kemudian Bu Wati sadar
 * bahwa ia belum membeli kentang. Akhirnya Bu Wati mendapatkan kentang dan
 * ia ingin menambahkannya pada data bahan masakannya. Bantu Bu Wati untuk menambahkan
 * kentang pada bahan makanan dengan tipe sayuran
 */

// jawaban di sini

bahan_masakan[1].isi.push("kentang")
// console.log() untuk melihat hasil
console.log(bahan_masakan)




