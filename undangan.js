(() => {
  const host = window.location.hostname;

  // Data konten + template class per domain
  const dataByDomain = {
    "weddify.id": {
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

  // Element target
  const titleEl = document.getElementById("judul");
  const detailEl = document.getElementById("detail");

  if (dataByDomain[host]) {
    // Update konten
    titleEl.textContent = dataByDomain[host].judul;
    detailEl.textContent = dataByDomain[host].detail;

    // Update kelas body untuk template styling
    document.body.classList.add(dataByDomain[host].templateClass);
  } else {
    // Kalau domain gak dikenali
    titleEl.textContent = "Undangan Tidak Ditemukan 😓";
    detailEl.textContent = `Domain ${host} belum terdaftar.`;
  }
})();
