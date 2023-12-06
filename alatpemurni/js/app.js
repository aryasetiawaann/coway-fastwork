function cekPenggunaBaru() {
  var penggunaBaru = document.cookie.indexOf('pengguna_baru=yes') === -1;

  if (penggunaBaru) {
    viewVoucher();
  }
}

function sendWhatsAppVoucher() {
  const voucher = document.getElementById('pop-up');
  const success = document.getElementById('pop-up-success');
  const name = document.getElementById('nama').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const pop = document.getElementById('bg-pop-up');

  if (name && phone && email) {
    (function () {
      emailjs.init('LFwaN_GV_dJS6er5v');
    })();

    var params = {
      sendername: email,
      to: 'budakit.id@gmail.com',
      subject: email + ' mendapatkan voucher!',
      name: name,
      phone: phone,
      email: email,
    };

    var serviceID = 'service_1ez7pob';
    var templateID = 'template_xiw5njp';

    emailjs.send(serviceID, templateID, params);

    var now = new Date();
    var expire = new Date();
    expire.setFullYear(now.getFullYear() + 10);

    document.cookie = 'pengguna_baru=yes; expires=' + expire.toUTCString();

    voucher.style.display = 'none';
    success.style.display = 'flex';
    pop.style.display = 'none';
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

  if (nama && pekerjaan && phone && email && kota && kodePos && domisili && produk && website) {
    (function () {
      emailjs.init('LFwaN_GV_dJS6er5v');

      var params2 = {
        sendername: email,
        to: 'budakit.id@gmail.com',
        subject: 'Mendapatkan Pesan dari ' + email,
        name: nama,
        phone: phone,
        email: email,
        work: pekerjaan,
        city: kota,
        pos: kodePos,
        place: domisili,
        product: produk,
        website: website,
        konsultan: konsultan,
        pertanyaan: pertanyaan,
      };

      emailjs.send('service_1ez7pob', 'template_uy8h4gm', params2);
      alert('Pesan terkirim, terima kasih');
    })();

    var url_wa = 'https://web.whatsapp.com/send';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      url_wa = 'whatsapp://send';
    }

    var cs_whatsapp = [
      '6281223202218', //<- masukan nomor tanpa 0 / +62 & baris nomor terakhir tanpa koma
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

    viewForm();
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

let isButtonClick = 0;

function viewVoucher() {
  const pop = document.getElementById('bg-pop-up');
  const popVoucher = document.getElementById('pop-up');
  const blur = document.getElementById('blur');

  pop.style.display = 'flex';
  popVoucher.style.display = 'flex';
  blur.style.display = 'flex';

  // BIAR SCROLL NAIK KE ATAS LAGI KETIKA LAPTOP VIEW
  if (window.innerWidth < 1800 && window.innerWidth > 900) {
    if (isButtonClick == 0) {
      window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 700) {
          scrollToTop(0, 2000); // Scroll ke atas dengan durasi 2000ms
        }
      });
    }
  }
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

    scrollToTop(0, 2000);
    pop.classList.add('form');
    blur.classList.add('form');
    form.style.display = 'flex';
    contact.style.display = 'none';

    //LIMIT SCROLL
    window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;

      if (scrollPosition > 1100 && window.innerWidth >= 1800) {
        scrollToTop(0, 2000); // Scroll ke atas dengan durasi 2000ms
      } else if (scrollPosition > 1200 && window.innerWidth >= 1200 && window.innerWidth < 1800) {
        scrollToTop(0, 2000); // Scroll ke atas dengan durasi 2000ms
      } else if (scrollPosition > 800 && window.innerWidth < 1200 && window.innerWidth > 600) {
        scrollToTop(0, 2000); // Scroll ke atas dengan durasi 2000ms
      } else if (scrollPosition > 1800 && window.innerWidth < 600) {
        scrollToTop(0, 2000); // Scroll ke atas dengan durasi 2000ms
      }
    });

    // EVENT KLIK BUTTON KIRIM (POP UP FORM BUTTON)
    beliButton.addEventListener('click', function () {
      sendWhatsAppForm();

      pop.classList.remove('form');
      blur.classList.remove('form');
      form.style.display = 'none';
      contact.style.display = 'flex';

      window.location.reload();
    });
  }

  // EVENT KLIK BUTTON KIRIM VOUCHER (POP UP VOUCHER BUTTON)
  if (voucherButton) {
    voucherButton.addEventListener('click', function () {
      sendWhatsAppVoucher();

      pop.style.display = 'flex';
      popVoucher.style.display = 'none';
      // success.style.display = 'flex';

      if (window.innerWidth < 1800 && window.innerWidth > 870) {
        blur.style.display = 'flex';
        window.addEventListener('scroll', function () {
          var scrollPosition = window.scrollY;

          if (scrollPosition > 600) {
            scrollToTop(0, 2000);
          }
        });
      }
    });
  }

  cekPenggunaBaru();

  // EVENT KLIK BUTTON BELI DI PAGE
  // beli.forEach(function (el) {
  //   el.addEventListener('click', function () {
  //     viewForm();
  //   });
  // });

  //EVENT KLIK CONTACT
  contact.onclick = function () {
    viewForm();
  };

  const neoButton = document.getElementById('neo-button');
  const villaemButton = document.getElementById('villaem-button');
  const ombakButton = document.getElementById('ombak-button');
  const coreButton = document.getElementById('core-button');
  const stormButton = document.getElementById('storm-button');
  const tornadoButton = document.getElementById('tornado-button');
  const wowCoreButton = document.getElementById('wowCore-button');
  const wowOmbakButton = document.getElementById('wowOmbak-button');
  const wowNeoButton = document.getElementById('wowNeo-button');
  const selectProduct = document.getElementById('produk-form');

  neoButton.onclick = function () {
    viewForm();
    selectProduct.value = 'Neo Plus';
  };
  villaemButton.onclick = function () {
    viewForm();
    selectProduct.value = 'Villaem II';
  };
  ombakButton.onclick = function () {
    viewForm();
    selectProduct.value = 'Ombak';
  };
  coreButton.onclick = function () {
    viewForm();
    selectProduct.value = 'Core';
  };
  stormButton.onclick = function () {
    viewForm();
    selectProduct.value = 'Storm';
  };
  tornadoButton.onclick = function () {
    viewForm();
    selectProduct.value = 'Tornado';
  };
  wowCoreButton.onclick = function () {
    viewForm();
    selectProduct.value = 'WOW Storm Core';
  };
  wowOmbakButton.onclick = function () {
    viewForm();
    selectProduct.value = 'WOW Storm Ombak';
  };
  wowNeoButton.onclick = function () {
    viewForm();
    selectProduct.value = 'WOW Storm Neo';
  };

  const sumber = document.getElementById('website-form');
  const formElement = document.querySelector('.pop-up-form');

  sumber.addEventListener('change', function () {
    if (sumber.value == 'konsultan') {
      document.getElementById('konsultan-container').style.display = 'flex';

      if (window.innerWidth <= 550) {
        formElement.classList.add('konsultan');
      }
    } else {
      document.getElementById('konsultan-container').style.display = 'none';  
      formElement.classList.remove('konsultan');
    }
  });
});

function openLayer() {
  var layer = document.getElementById('layer');
  if (layer.style.display === 'block') {
    layer.style.display = 'none';
  } else {
    layer.style.display = 'block';
  }
}
