// Nomor 1
console.log("Nomor 1 \n===============================\n");

const NumberOne = (value) => {
  const n = value;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      console.log("OKYES");
    } else if (i % 4 === 0) {
      console.log("YES");
    } else if (i % 3 === 0) {
      console.log("OK");
    } else {
      console.log(i);
    }
  }
};

NumberOne(15);

console.log("\n");
// Nomor 2
console.log("Nomor 2 \n===============================");
console.log("Nomor 2a \n===============================\n");

const NumberTwoA = (value) => {
  n = value;
  let res = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      res += i;
    }
    res += "\n";
  }
  console.log(res);
};

NumberTwoA(5);

console.log("Nomor 2b \n===============================\n");
const NumberTwoB = (value) => {
  n = value;
  let res = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 1; j--) {
      res += j;
    }
    res += "\n";
  }
  console.log(res);
};

NumberTwoB(5);

console.log("Nomor 2c \n===============================\n");
const NumberTwoC = (value) => {
  n = value;
  let res = "";
  let arr = [];
  let num = 1;
  for (let i = 1; i <= n; i++) {
    for (k = 1; k <= i; k++) {
      if (num === n) {
        for (let j = n - 1; j >= 1; j--) {
          res += num;
          num--;
        }
      } else {
        res += num;
        num++;
      }
    }
    res += "\n";
  }
  console.log(res);
};

NumberTwoC(5);

const NumberTwoD = (value) => {
  n = value * value;
  let res = "";
  for (let i = 1; i <= n; i++) {
    res += i + "\n";
  }
  console.log(res);
};

// NumberTwoD(5);

// Nomor 3
console.log("Nomor 3 \n===============================\n");

const NumberThree = () => {
  n = [12, 9, 13, 6, 10, 4, 7, 2];

  let result = [];
  n.map((item) => {
    if (item % 3 !== 0) {
      result.push(item);
    }
  });

  result.sort((a, b) => {
    return a - b;
  });

  console.log(result);
};

NumberThree();

// Nomor 4

// A

// SELECT * FROM barang WHERE HARGA > 10000 ORDER BY HARGA ASC

// A

// SELECT * FROM pelanggan WHERE ALAMAT = 'BANDUNG' AND NAMA LIKE '%g%'

// C

// SELECT transaksi.KODE, TANGGAL, pelanggan.NAMA AS NAMA_PELANGGAN, barang.NAMA AS NAMA_BARANG, JUMLAH_BARANG AS JUMLAH, barang.HARGA AS HARGA_SATUAN, JUMLAH_BARANG * barang.HARGA AS TOTAL FROM `transaksi` JOIN barang ON transaksi.KODE_BARANG = barang.KODE JOIN pelanggan ON transaksi.KODE_PELANGGAN = pelanggan.KODE ORDER BY pelanggan.NAMA ASC

// D

// SELECT pelanggan.NAMA AS NAMA_PELANGGAN, SUM(JUMLAH_BARANG) AS JUMLAH, SUM(JUMLAH_BARANG * barang.HARGA) AS TOTAL_HARGA FROM `transaksi` JOIN pelanggan ON KODE_PELANGGAN = pelanggan.KODE JOIN barang ON KODE_BARANG = barang.KODE GROUP BY pelanggan.NAMA
