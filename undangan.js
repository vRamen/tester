const host = window.location.hostname;

// Data konten
const dataByDomain = {
  "tester-beige.vercel.app": {
    judul: "Selamat Datang di Weddify 🎉",
    detail: "Buat undangan pernikahan digitalmu di sini!",
    templateClass: "template1"
  },
  "kamingundang.biz.id": {
    judul: "Undangan Pernikahan 💍",
    detail: "Citra & Adi akan menikah pada 12 Agustus 2025. Kami mengundang Anda!",
    templateClass: "template2"
  },
  "contohdomainlain.id": {
    judul: "Undangan Lain",
    detail: "Ini undangan template 2",
    templateClass: "template2"
  }
};

const titleEl = document.getElementById("judul");
const detailEl = document.getElementById("detail");

if (dataByDomain[host]) {
  titleEl.textContent = dataByDomain[host].judul;
  detailEl.textContent = dataByDomain[host].detail;

  // Ganti kelas body untuk style template
  document.body.classList.add(dataByDomain[host].templateClass);
} else {
  titleEl.textContent = "Undangan Tidak Ditemukan 😓";
  detailEl.textContent = `Domain ${host} belum terdaftar.`;
}
