function redirectToWhatsApp() {
  const nomorWA = "0895327157414"; // Ganti dengan nomor WhatsApp tujuan Anda
  const pesanWA = "Halo, saya sudah melakukan pembayaran. Mohon konfirmasinya.";
  const whatsappURL = `https://wa.me/${nomorWA}?text=${encodeURIComponent(
    pesanWA
  )}`;

  // Alihkan ke WhatsApp
  window.location.href = whatsappURL;
}

// Tunggu 5 detik sebelum mengarahkan ke WhatsApp
setTimeout(redirectToWhatsApp, 5000);

// Tambahkan event listener ke link "klik di sini" jika pengguna ingin diarahkan lebih cepat
document.getElementById("waLink").addEventListener("click", function (event) {
  event.preventDefault();
  redirectToWhatsApp();
});
