/**
 * Pak Burhan memiliki sebuah toko laptop
 * Di toko tersebut, ada 1 jenis laptop yang sangat diminati oleh
 * para pembelinya. Laptop tersebut adalah MacBook Pro 2020. Laptop
 * tersebut memiliki 2 jenis warna, yaitu Silver dan Space Grey. Untuk
 * mendukung performa dari laptop tersebut memiliki prosesor 
 * Intel Core i5 quad-core generasi kedelapan dan memiliki penyimpanan
 * 512 GB dan 1 TB. Laptop tersebut Pak Burhan jual dengan harga 34 juta.
 */

 let laptop;

 /**
  * Buatlah sebuah object bernama laptop yang bisa merepresentasikan
  * laptop yang sudah didekripsikan di atas.
  * 
  * Ketentuan: nama keys pada object dibebaskan
  */
 
 laptop = {
   nama: "MacBook Pro 2020",
   warna: ["Silver", "Space Grey"],
   prosesor: "Intel Core i5 quad-core generasi kedelapan",
   penyimpanan: ['512 GB', '1 TB'],
   harga: 34000000
 }
 // console.log() untuk melihat hasil
 console.log(laptop)
 
 
 /**
  * Ternyata Apple mengeluarkan laptop tersebut dengan varian warna yang baru,
  * yaitu Gold.
  * Tambahkan warna Gold pada object yang kalian buat
  */
 
 laptop.warna.push("Gold")
 // console.log() untuk melihat hasil
 console.log(laptop)
 
 
 /**
  * Pak Burhan membuka Pre-Order untuk laptop tersebut, dan ia ingin menambahkan
  * data nama orang yang mengorder ke dalam object laptop. Nama-nama orang yang
  * mengorder laptop tersebut adalah Ian, Opi, dan Dio
  * 
  * Tambahkan properti "order by" pada object laptop yang berisi nama-nama yang melakukan
  * pre-order
  */
 
 laptop["order by"] = ["Ian", "Opi", "Dio"]
 // console.log() untuk melihat hasil

 console.log(laptop)
 
 
 /**
  * Pak Burhan ingin menambahkan potongan harga pada laptop 
  * tersebut dengan besaran 1000000.
  * 
  * Tambahkan properti "diskon" pada object untuk menampung
  * data potongan harga dan tambahkan pula
  * properti "harga setelah diskon" pada object
  * 
  * Rumus: harga setelah diskon = harga - diskon
  */
 

 laptop.diskon = 1000000
 laptop["harga setelah diskon"] = laptop.harga - laptop.diskon
 // console.log() untuk melihat hasil
 console.log(laptop)