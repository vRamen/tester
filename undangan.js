(() => {
  const templateByDomain = {
    "kamingundang.biz.id": "template2",
    "weddify.biz.id": "template2",
  };

  const host = window.location.hostname;
  const templateFolder = templateByDomain[host];

  if (templateFolder) {
    // Redirect ke folder template yang sesuai
    window.location.href = `/${templateFolder}/index.html`;
  } else {
    // Kalau domain gak dikenali, tampil pesan error di root
    document.body.innerHTML = "<h1>Domain tidak terdaftar</h1><p>Hubungi admin.</p>";
  }
})();
