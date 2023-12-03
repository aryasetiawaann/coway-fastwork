function sendWhatsAppVoucher() {
  const voucher = document.getElementById('pop-up');
  const success = document.getElementById('pop-up-success');
  const name = document.getElementById('nama').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  if (name && phone && email) {
    var url_wa = 'https://web.whatsapp.com/send';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      url_wa = 'whatsapp://send';
    }

    var cs_whatsapp = [
      '6281387954772', //<- masukan nomor tanpa 0 / +62 & baris nomor terakhir tanpa koma
    ];

    var rkey = Math.floor(Math.random() * cs_whatsapp.length);
    var random_cs = cs_whatsapp[rkey];

    var link =
      url_wa +
      '?phone=' +
      random_cs +
      '&text=' +
      encodeURIComponent(`Halo, saya ${name}
*WhatsApp :* ${phone}
*Email :* ${email}`);

    var w = 960,
      h = 540,
      left = Number(screen.width / 2 - w / 2),
      tops = Number(screen.height / 2 - h / 2),
      popupWindow = window.open(link, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);

    popupWindow.focus();

    voucher.style.display = 'none';
    success.style.display = 'flex';
  } else {
    alert('Lengkapi Form Terlebih Dahulu');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const voucherButton = document.getElementById('voucher');

  const pop = document.getElementById('bg-pop-up');

  voucherButton.addEventListener('click', function () {
    sendWhatsAppVoucher();
  });

  // setTimeout(function () {
  //   pop.style.display = 'flex';
  // }, 2000);

  const beli = document.querySelectorAll('.beli');
  
  beli.forEach(function (el) {
    el.addEventListener('click', function () {
      pop.style.display = 'flex';
    });
  });
});
