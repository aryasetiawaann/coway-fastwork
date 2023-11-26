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

  // INIT TOTAL BASIC COMMISSION
  const basicComission = document.getElementById('total-basic');
  let totalBasicComission = 0;

  // TOTAL BASIC COMMISSION CALCULATION
  const updateBasicCommission = (totalWater, totalAir) => {
    totalBasicComission = totalWater + totalAir;
    basicComission.innerText = 'Rp ' + totalBasicComission.toLocaleString('id-ID');

    total();
  };

  // INIT RESULT & INPUT
  const waterUnit = document.getElementById('water-unit');
  const waterCommission = document.getElementById('water-commission');
  const airUnit = document.getElementById('air-unit');
  const airCommission = document.getElementById('air-commission');
  const basicInput = document.querySelectorAll('.container input[type="number"]');

  // INIT VALUE
  let neoValue = 0;
  let villaemValue = 0;
  let ombakValue = 0;
  let coreValue = 0;

  let stormValue = 0;
  let tornadoValue = 0;
  let nobleValue = 0;

  // INIT COMMISSION
  let neoCommisson = 290000;
  let villaemCommisson = 340000;
  let ombakCommisson = 400000;
  let coreCommisson = 420000;

  let stormCommisson = 220000;
  let tornadoCommisson = 290000;
  let nobleCommisson = 421800;

  //
  let totalUnitAir = 0;
  let totalUnitWater = 0;

  basicInput.forEach((input) => {
    input.addEventListener('input', function (event) {
      const value = parseInt(event.target.value);
      const newValue = isNaN(value) ? 0 : value;

      // GET QUANTITY PRODUCT
      if (event.target.id === 'neo') {
        neoValue = newValue;
      } else if (event.target.id === 'villaem') {
        villaemValue = newValue;
      } else if (event.target.id === 'ombak') {
        ombakValue = newValue;
      } else if (event.target.id === 'core') {
        coreValue = newValue;
      } else if (event.target.id === 'storm') {
        stormValue = newValue;
      } else if (event.target.id === 'tornado') {
        tornadoValue = newValue;
      } else if (event.target.id === 'noble') {
        nobleValue = newValue;
      }

      // WATER CALCULATION
      totalUnitWater = neoValue + villaemValue + ombakValue + coreValue;
      let percentWater = 0;

      if (totalUnitWater == 1) {
        percentWater = 100 / 100;
      } else if (totalUnitWater == 2) {
        percentWater = 200 / 100;
      } else if (totalUnitWater >= 3 && totalUnitWater < 6) {
        percentWater = 300 / 100;
      } else if (totalUnitWater >= 6 && totalUnitWater < 10) {
        percentWater = 350 / 100;
      } else if (totalUnitWater >= 10) {
        percentWater = 400 / 100;
      }

      let totalWater = ((neoValue * neoCommisson + villaemValue * villaemCommisson + ombakValue * ombakCommisson + coreValue * coreCommisson) * percentWater) / 12;

      waterUnit.innerText = totalUnitWater + ' Unit';
      waterCommission.innerText = 'Rp ' + totalWater.toLocaleString('id-ID');

      // AIR CALCULATION
      totalUnitAir = stormValue + tornadoValue + nobleValue;
      let percentAir = 0;

      if (totalUnitAir == 1) {
        percentAir = 100 / 100;
      } else if (totalUnitAir == 2) {
        percentAir = 100 / 100;
      } else if (totalUnitAir >= 3 && totalUnitAir < 6) {
        percentAir = 100 / 100;
      } else if (totalUnitAir >= 6 && totalUnitAir < 10) {
        percentAir = 150 / 100;
      } else if (totalUnitAir >= 10) {
        percentAir = 200 / 100;
      }

      let totalAir = ((stormValue * stormCommisson + tornadoValue * tornadoCommisson + nobleValue * nobleCommisson) * percentAir) / 12;

      airUnit.innerText = totalUnitAir + ' Unit';
      airCommission.innerText = 'Rp ' + totalAir.toLocaleString('id-ID');

      updateBasicCommission(totalWater, totalAir);
      countSalesPoint();

      total();
    });
  });

  // WOW COMISSION
  const wowInput = document.querySelectorAll('.wow input[type="number"]');
  const wowCommission = document.getElementById('total-wow');
  const totalPaket = document.getElementById('total-paket');

  // INIT QIANTITY
  let stormNeoValue = 0;
  let stormOmbakValue = 0;
  let stormCoreValue = 0;

  // INIT COMMISSION
  let stormNeoSingle = 3300000;
  let stormOmbakSingle = 3520000;
  let stormCoreSingle = 3560000;

  let stormNeoDouble = 7570000;
  let stormOmbakDouble = 7900000;
  let stormCoreDouble = 8000000;

  // INIT SALES POINT MAX
  let salesPointMax = 7;
  let salesPointWow = 0;

  //
  let totalCommissionWow = 0;

  wowInput.forEach((input) => {
    input.addEventListener('input', function (event) {
      const value = parseInt(event.target.value);
      const newValue = isNaN(value) ? 0 : value;

      // GET QUANTITY PRODUCT
      if (event.target.id === 'stormNeo') {
        stormNeoValue = newValue;
      } else if (event.target.id === 'stormOmbak') {
        stormOmbakValue = newValue;
      } else if (event.target.id === 'stormCore') {
        stormCoreValue = newValue;
      }

      // COMMISSION CALCULATION
      const calculateCommission = (quantity, singleCommission, doubleCommission) => {
        const countDouble = (value) => {
          let count = 0;

          while (value >= 2) {
            value /= 2;
            count++;
          }

          return count;
        };

        const doubleCount = countDouble(quantity);
        const singleCount = quantity - doubleCount * 2;

        totalCommissionWow = doubleCount * doubleCommission + singleCount * singleCommission;

        return totalCommissionWow;
      };

      const totalStormNeoCommission = calculateCommission(stormNeoValue, stormNeoSingle, stormNeoDouble);
      const totalStormOmbakCommission = calculateCommission(stormOmbakValue, stormOmbakSingle, stormOmbakDouble);
      const totalStormCoreCommission = calculateCommission(stormCoreValue, stormCoreSingle, stormCoreDouble);

      paket = stormNeoValue + stormOmbakValue + stormCoreValue;
      totalPaket.innerText = paket + ' Unit';

      // SALES POINT CALCULATION
      salesPointWow = paket * 2;
      let minusComission = 0;

      if (salesPointWow > salesPointMax) {
        let difference = salesPointWow - salesPointMax;

        if (difference == 1) {
          minusComission = 1000000;
        } else if (difference == 2) {
          minusComission = 2500000;
        } else if (difference == 3) {
          minusComission = 4000000;
        } else if (difference == 4) {
          minusComission = 5000000;
        } else if (difference == 5) {
          minusComission = 7000000;
        } else if (difference == 6) {
          minusComission = 7000000;
        } else if (difference >= 7) {
          minusComission = 10000000;
        }
      }

      totalCommissionWow = totalStormNeoCommission + totalStormOmbakCommission + totalStormCoreCommission - minusComission;

      wowCommission.innerText = 'Rp ' + totalCommissionWow.toLocaleString('id-ID');

      countSalesPoint();
      total();
    });
  });

  // SALES POINT

  let totalSalesCommission = 0;
  const countSalesPoint = () => {
    const salesPointTotal = document.getElementById('sales-point');
    const salesCommission = document.getElementById('sales-total');
    let salesPointBasic = totalUnitAir + totalUnitWater;
    
    if (salesPointWow >= 7) {
      salesPointTotal.innerText = 0;
      salesPointBasic = 0;
    } else if (salesPointWow < 7) {
      salesPointTotal.innerText = salesPointBasic;
    }

    if (salesPointBasic == 0) {
      totalSalesCommission = 0;
    } else if (salesPointBasic == 1) {
      totalSalesCommission = 1000000;
    } else if (salesPointBasic == 2) {
      totalSalesCommission = 2500000;
    } else if (salesPointBasic == 3) {
      totalSalesCommission = 4000000;
    } else if (salesPointBasic == 4) {
      totalSalesCommission = 5000000;
    } else if (salesPointBasic == 5) {
      totalSalesCommission = 7000000;
    } else if (salesPointBasic == 6) {
      totalSalesCommission = 7000000;
    } else if (salesPointBasic >= 7) {
      totalSalesCommission = 10000000;
    }

    salesCommission.innerText = 'Rp ' + totalSalesCommission.toLocaleString('id-ID');
  };

  // TOTAL COMMISSION
  const total = () => {
    const basic = document.getElementById('final-basic');
    const wow = document.getElementById('final-wow');
    const sales = document.getElementById('final-sales');
    const performance = document.getElementById('final-performance');
    const total = document.getElementById('final-total');
    const monthly = document.getElementById('final-monthly');
    
    basic.innerHTML = 'Rp ' + totalBasicComission.toLocaleString('id-ID');
    monthly.innerHTML = 'Rp ' + totalBasicComission.toLocaleString('id-ID');
    wow.innerHTML = 'Rp ' + totalCommissionWow.toLocaleString('id-ID');
    sales.innerHTML = 'Rp ' + totalSalesCommission.toLocaleString('id-ID');
    total.innerHTML = 'Rp ' + (totalBasicComission + totalCommissionWow + totalSalesCommission).toLocaleString('id-ID');
  };
});
