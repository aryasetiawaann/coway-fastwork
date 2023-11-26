window.onload = function () {
  var card = document.querySelector('.card');
  card.classList.remove('hidden');
};

document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('password');
  const submit = document.getElementById('button-submit');

  submit.addEventListener('click', function (e) {
    const password = input.value;

    if (password === '12345678') {
      var card = document.querySelector('.card');
      var pop = document.querySelector('.pop');
      card.classList.add('hide');
      pop.classList.add('hide');
    } else {
      alert('salah');
    }
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const password = input.value;

      if (password === '12345678') {
        var card = document.querySelector('.card');
        var pop = document.querySelector('.pop');
        card.classList.add('hide');
        pop.classList.add('hide');
      } else {
        alert('salah');
      }
    }
  });


  let totalWater = 0;
  let totalAir = 0;
  let totalBasicComission = 0;

  const basicComission = document.getElementById('total-basic');

  const updateBasicCommission = () => {
    totalBasicComission = totalWater + totalAir;
    basicComission.innerText = 'Rp ' + totalBasicComission.toLocaleString('id-ID');
  };

  // WATER BASIC
  const waterUnit = document.getElementById('water-unit');
  const waterCommission = document.getElementById('water-commission');
  const waterInput = document.querySelectorAll('#water-input input[type="number"]');

  let neoValue = 0;
  let villaemValue = 0;
  let ombakValue = 0;
  let coreValue = 0;

  let neoCommisson = 290000;
  let villaemCommisson = 340000;
  let ombakCommisson = 400000;
  let coreCommisson = 420000;

  waterInput.forEach((input) => {
    input.addEventListener('input', function (event) {
      const value = parseInt(event.target.value);

      // Memeriksa apakah nilai input berupa angka atau NaN (Not a Number)
      // Jika NaN, atur nilai menjadi 0
      const newValue = isNaN(value) ? 0 : value;

      if (event.target.id === 'neo') {
        neoValue = newValue;
      } else if (event.target.id === 'villaem') {
        villaemValue = newValue;
      } else if (event.target.id === 'ombak') {
        ombakValue = newValue;
      } else if (event.target.id === 'core') {
        coreValue = newValue;
      }

      let totalUnit = neoValue + villaemValue + ombakValue + coreValue;
      console.log(totalUnit);

      let percent = 0;

      if (totalUnit == 1) {
        percent = 100 / 100;
      } else if (totalUnit == 2) {
        percent = 200 / 100;
      } else if (totalUnit >= 3 && totalUnit < 6) {
        percent = 300 / 100;
      } else if (totalUnit >= 6 && totalUnit < 10) {
        percent = 350 / 100;
      } else if (totalUnit >= 10) {
        percent = 400 / 100;
      }

      let totalWater = ((neoValue * neoCommisson + villaemValue * villaemCommisson + ombakValue * ombakCommisson + coreValue * coreCommisson) * percent) / 12;

      waterUnit.innerText = totalUnit + ' Unit';
      waterCommission.innerText = 'Rp ' + totalWater.toLocaleString('id-ID');

      updateBasicCommission();
    });
  });

  //AIR BASIC
  const airUnit = document.getElementById('air-unit');
  const airCommission = document.getElementById('air-commission');
  const airInput = document.querySelectorAll('#air-input input[type="number"]');

  let stormValue = 0;
  let tornadoValue = 0;
  let nobleValue = 0;

  let stormCommisson = 220000;
  let tornadoCommisson = 290000;
  let nobleCommisson = 421800;

  airInput.forEach((input) => {
    input.addEventListener('input', function (event) {
      const value = parseInt(event.target.value);

      // Memeriksa apakah nilai input berupa angka atau NaN (Not a Number)
      // Jika NaN, atur nilai menjadi 0
      const newValue = isNaN(value) ? 0 : value;

      if (event.target.id === 'storm') {
        stormValue = newValue;
      } else if (event.target.id === 'tornado') {
        tornadoValue = newValue;
      } else if (event.target.id === 'noble') {
        nobleValue = newValue;
      }

      let totalUnit = stormValue + tornadoValue + nobleValue;

      let percent = 0;

      if (totalUnit == 1) {
        percent = 100 / 100;
      } else if (totalUnit == 2) {
        percent = 100 / 100;
      } else if (totalUnit >= 3 && totalUnit < 6) {
        percent = 100 / 100;
      } else if (totalUnit >= 6 && totalUnit < 10) {
        percent = 150 / 100;
      } else if (totalUnit >= 10) {
        percent = 200 / 100;
      }

      let totalAir = ((stormValue * stormCommisson + tornadoValue * tornadoCommisson + nobleValue * nobleCommisson) * percent) / 12;

      airUnit.innerText = totalUnit + ' Unit';
      airCommission.innerText = 'Rp ' + totalAir.toLocaleString('id-ID');

      updateBasicCommission();
    });
  });

});
