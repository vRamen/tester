const host = window.location.hostname;

// Mapping domain → konten
const dataByDomain = {
  "tester-beige.vercel.app": {
    judul: "Selamat Datang di Weddify 🎉",
    detail: "Buat undangan pernikahan digitalmu di sini!"
  },
  "kamingundang.biz.id": {
    judul: "Undangan Pernikahan 💍",
    detail: "Citra & Adi akan menikah pada 12 Agustus 2025. Kami mengundang Anda!"
  },
  // Bisa tambah domain lain di sini...
};

// Element target
const titleEl = document.getElementById("judul");
const detailEl = document.getElementById("detail");

// Tampilkan konten sesuai domain
if (dataByDomain[host]) {
  titleEl.textContent = dataByDomain[host].judul;
  detailEl.textContent = dataByDomain[host].detail;
} else {
  titleEl.textContent = "Undangan Tidak Ditemukan 😓";
  detailEl.textContent = `Domain ${host} belum terdaftar.`;
}
