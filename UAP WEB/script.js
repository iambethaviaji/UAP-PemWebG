list_barang = [
  { kode: "001", barang: "Buku", harga: 3500 },
  { kode: "002", barang: "Tas", harga: 100000 },
  { kode: "003", barang: "Topi", harga: 15000 },
  { kode: "004", barang: "Seragam", harga: 90000 },
  { kode: "005", barang: "Sepatu", harga: 160000 },
];

var listBarangTabel = document.getElementById("listTabelBarang");

list_barang.forEach(function (item) {
  var { kode, barang, harga } = item;
  var row = listBarangTabel.insertRow(listBarangTabel.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = kode;
  cell2.innerHTML = barang;
  cell3.innerHTML = "Rp." + harga.toFixed(2);
});

function tambahBarang() {
  var kodeBarang = document.getElementById("kodeBarang").value;
  var banyakBarang = document.getElementById("banyakBarang").value;
  var selectedItem = list_barang.find((item) => item.kode === kodeBarang);
  var totalPembayaran;
  if (selectedItem) {
    totalPembayaran = selectedItem.harga * banyakBarang;
    alert("Total pembayaran: " + totalPembayaran.toFixed(2));

    var uang = prompt("Masukkan uang: ");
    var kembalian = uang - totalPembayaran;
    if (uang < totalPembayaran) {
      alert("Uang tidak mencukupi");
    } else {
      alert(
        "Uang pembeli: " +
          uang +
          "\nTotal bayar: " +
          totalPembayaran +
          "\nKembalian" +
          kembalian
      );
    }
  } else {
    alert("Barang dengan kode " + kodeBarang + " tidak ditemukan");
  }
}
