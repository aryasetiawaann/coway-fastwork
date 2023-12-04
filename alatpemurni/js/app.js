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
    console.log('mamang');
    sessionStorage.setItem('start', 'start');
  } else {
    alert('Lengkapi Form Terlebih Dahulu');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const voucherButton = document.getElementById('voucher');
  const success = document.getElementById('pop-up-success');

  const pop = document.getElementById('bg-pop-up');
  const popVoucher = document.getElementById('pop-up');
  const blur = document.getElementById('blur');

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
      }
    });
  }

  // if (!sessionStorage.getItem('start')) {
  // setTimeout(function () {
  //   pop.style.display = 'flex';
  //   popVoucher.style.display = 'flex';
  //   blur.style.display = 'flex';

  //   if (window.innerWidth < 1800 && window.innerWidth > 900) {
  //     if (isButtonClick == 0) {
  //       window.addEventListener('scroll', function () {
  //         var scrollPosition = window.scrollY;

  //         if (scrollPosition > 700) {
  //           scrollToTop(160, 500); // Scroll ke atas dengan durasi 500ms
  //         }
  //       });

  //       function scrollToTop(to, duration) {
  //         if (duration <= 0) return;
  //         var difference = to - window.scrollY;
  //         var perTick = (difference / duration) * 10;

  //         setTimeout(function () {
  //           window.scrollBy(0, perTick);
  //           if (window.scrollY === to) return;
  //           scrollToTop(to, duration - 10);
  //         }, 10);
  //       }
  //     }
  //   }
  // }, 2000);
  // }

  const beli = document.querySelectorAll('.beli');

  beli.forEach(function (el) {
    el.addEventListener('click', function () {
      pop.style.display = 'flex';
    });
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
