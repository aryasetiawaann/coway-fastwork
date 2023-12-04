function sendWhatsAppVoucher() {
  const voucher = document.getElementById('pop-up');
  const success = document.getElementById('pop-up-success');
  const name = document.getElementById('nama').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const pop = document.getElementById('bg-pop-up');

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
    console.log('mamang');
    pop.style.display = 'none';
    sessionStorage.setItem('start', 'start');
  } else {
    alert('Lengkapi Form Terlebih Dahulu');
  }
}

function sendWhatsAppForm() {
  const form = document.getElementById('pop-up-form');
  const pop = document.getElementById('bg-pop-up');

  // FORM VALUE
  const nama = document.getElementById('nama-form').value;
  const pekerjaan = document.getElementById('pekerjaan-form').value;
  const phone = document.getElementById('phone-form').value;
  const email = document.getElementById('email-form').value;
  const kota = document.getElementById('kota-form').value;
  const kodePos = document.getElementById('kode_pos-form').value;
  const domisili = document.getElementById('domisili-form').value;
  const produk = document.getElementById('produk-form').value;
  const website = document.getElementById('website-form').value;
  const konsultan = document.getElementById('konsultan-form').value;
  const pertanyaan = document.getElementById('pertanyaan-form').value;

  if (nama && pekerjaan && phone && email && kota && kodePos && domisili && produk && website && konsultan && pertanyaan) {
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
      encodeURIComponent(`Halo, saya ${nama}
      *Pekerjaan :* ${pekerjaan}
      *Phone :* ${phone}
      *Email :* ${email}
      *Kota :* ${kota}
      *Kode Pos :* ${kodePos}
      *Domisili :* ${domisili}
      *Produk :* ${produk}
      *Website :* ${website}
      *Konsultan :* ${konsultan}
      *Pertanyaan :* ${pertanyaan}`);

    var w = 960,
      h = 540,
      left = Number(screen.width / 2 - w / 2),
      tops = Number(screen.height / 2 - h / 2),
      popupWindow = window.open(link, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);

    popupWindow.focus();

    form.style.display = 'none';
    pop.style.display = 'none';
  } else {
    alert('Lengkapi Form Terlebih Dahulu');
  }
}

function scrollToTop(to, duration) {
  if (duration <= 0) return;
  var difference = to - window.scrollY;
  var perTick = (difference / duration) * 10;

  setTimeout(function () {
    window.scrollBy(0, perTick);
    if (window.scrollY === to) return;
    scrollToTop(to, duration - 10);
  }, 10);
}

document.addEventListener('DOMContentLoaded', function () {
  const voucherButton = document.getElementById('voucher');
  const pop = document.getElementById('bg-pop-up');
  const popVoucher = document.getElementById('pop-up');
  const blur = document.getElementById('blur');
  const beli = document.querySelectorAll('.beli');
  const contact = document.getElementById('contact');

  function viewForm() {
    const form = document.getElementById('pop-up-form');
    const beliButton = document.getElementById('beli-button');
    const contact = document.getElementById('contact');

    scrollToTop(0, 500);
    pop.classList.add('form');
    blur.classList.add('form');
    form.style.display = 'flex';
    contact.style.display = 'none';

    window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;

      if (scrollPosition > 900 && window.innerWidth >= 1800) {
        scrollToTop(0, 500); // Scroll ke atas dengan durasi 500ms
      } else if (scrollPosition > 1000 && window.innerWidth >= 1200 && window.innerWidth < 1800) {
        scrollToTop(0, 500); // Scroll ke atas dengan durasi 500ms
      } else if (scrollPosition > 600 && window.innerWidth <= 900 && window.innerWidth > 600) {
        scrollToTop(0, 500); // Scroll ke atas dengan durasi 500ms
      } else if (scrollPosition > 1500 && window.innerWidth < 600) {
        scrollToTop(0, 500); // Scroll ke atas dengan durasi 500ms
      }
    });

    beliButton.addEventListener('click', function () {
      sendWhatsAppForm();
    });
  }

  let isButtonClick = 0;

  if (voucherButton) {
    voucherButton.addEventListener('click', function () {
      sendWhatsAppVoucher();

      console.log('mamang');
      pop.style.display = 'flex';
      // success.style.display = 'flex';

      if (window.innerWidth < 1800 && window.innerWidth > 870) {
        blur.style.display = 'flex';
        window.addEventListener('scroll', function () {
          var scrollPosition = window.scrollY;

          if (scrollPosition > 600) {
            scrollToTop(160, 500);
          }
        });
      }
    });
  }

  if (!sessionStorage.getItem('start')) {
    setTimeout(function () {
      pop.style.display = 'flex';
      popVoucher.style.display = 'flex';
      blur.style.display = 'flex';

      if (window.innerWidth < 1800 && window.innerWidth > 900) {
        if (isButtonClick == 0) {
          window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;

            if (scrollPosition > 700) {
              scrollToTop(160, 500); // Scroll ke atas dengan durasi 500ms
            }
          });
        }
      }
    }, 2000);
  }

  beli.forEach(function (el) {
    el.addEventListener('click', function () {
      viewForm();
    });
  });

  contact.onclick = function () {
    viewForm();
  };
});

// function openLayer() {
//   // var layer = document.getElementById('bg-pop-up');
//   const form = document.getElementById('pop-up-form');

//   // if (layer.style.display === 'block') {
//   //   layer.style.display = 'none';
//   //   form.style.display = 'none';
//   // } else {
//   //   layer.style.display = 'block';
//   //   form.style.display = 'flex';
//   // }

//   layer.style.display = 'flex';
//   form.style.display = 'flex';
// }
