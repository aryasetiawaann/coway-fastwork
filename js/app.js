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

  const basicComission = document.getElementById('total-basic-cicilan');
  const basicComission2 = document.getElementById('total-basic-tunai');

  let nilaiTunai = 0;
  let nilaiCicilan = 0;

  const setWater = (totalWater) => {
    const select = document.getElementById('pembayaran-water');

    select.addEventListener('change', function (event) {
      const value = event.target.value;

      if (value === 'tunai') {
        nilaiTunai -= totalWater;
        totalCicilan -= totalWater;
        nilaiTunai += totalWater;
      } else if (value === 'cicilan') {
        nilaiTunai -= totalWater;
        nilaiCicilan -= totalWater;
        nilaiCicilan += totalWater;
      }

      return totalWater;
    });
  };

  const setAir = (totalAir) => {
    const select = document.getElementById('pembayaran-air');

    select.addEventListener('change', function (event) {
      const value = event.target.value;

      if (value === 'tunai') {
        nilaiTunai -= totalAir;
        totalCicilan -= totalAir;
        nilaiTunai += totalAir;
      } else if (value === 'cicilan') {
        nilaiTunai -= totalAir;
        nilaiCicilan -= totalAir;
        nilaiCicilan += totalAir;
      }

      return totalAir;
    });
  };

  const basicTotal = (totalAir, totalWater) => {
    setWater(totalWater);
    setAir(totalAir);

    basicComission.innerText = nilaiCicilan;
    basicComission2.innerText = nilaiTunai;
  };

  // INIT TOTAL BASIC COMMISSION

  const allSelects = document.querySelectorAll('select');

  let totalBasicComission = 0;
  let tunai = 0;
  let cicilan = 0;

  // TOTAL BASIC COMMISSION CALCULATION
  const updateBasicCommission = (totalAir, totalWater) => {
    const value1 = document.querySelector('#pembayaran-air').value;
    const value2 = document.querySelector('#pembayaran-water').value;

    if (value1 == 'tunai' && value2 == 'tunai') {
      tunai = totalWater + totalAir;
      basicComission2.innerText = tunai.toLocaleString('id-ID');
      basicComission.innerText = 0;
    } else if (value1 == 'cicilan' && value2 == 'cicilan') {
      cicilan = (totalWater + totalAir) / 12;
      basicComission.innerText = cicilan.toLocaleString('id-ID');
      basicComission2.innerText = 0;
    } else if (value1 == 'cicilan' && value2 == 'tunai') {
      tunai = totalWater;
      cicilan = Math.round(totalAir / 12);
      basicComission.innerText = cicilan.toLocaleString('id-ID');
      basicComission2.innerText = tunai.toLocaleString('id-ID');
    } else if (value2 == 'cicilan' && value1 == 'tunai') {
      tunai = totalAir;
      cicilan = Math.round(totalWater / 12);
      basicComission.innerText = cicilan.toLocaleString('id-ID');
      basicComission2.innerText = tunai.toLocaleString('id-ID');
    } else if (value1 == 'cicilan') {
      cicilan = Math.round(totalAir / 12);
      basicComission.innerText = cicilan.toLocaleString('id-ID');
      basicComission2.innerText = 0;
    } else if (value2 == 'cicilan') {
      cicilan = Math.round(totalWater / 12);
      basicComission.innerText = cicilan.toLocaleString('id-ID');
      basicComission2.innerText = 0;
    } else if (value1 == 'tunai') {
      tunai = totalAir;
      basicComission2.innerText = tunai.toLocaleString('id-ID');
      basicComission.innerText = 0;
    } else if (value2 == 'tunai') {
      tunai = totalWater;
      basicComission2.innerText = tunai.toLocaleString('id-ID');
      basicComission.innerText = 0;
    }

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
  let totalWater = 0;
  let totalAir = 0;

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

      // totalWater = Math.round(((neoValue * neoCommisson + villaemValue * villaemCommisson + ombakValue * ombakCommisson + coreValue * coreCommisson) * percentWater) / 12);
      totalWater = Math.round((neoValue * neoCommisson + villaemValue * villaemCommisson + ombakValue * ombakCommisson + coreValue * coreCommisson) * percentWater);

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

      // totalAir = Math.round(((stormValue * stormCommisson + tornadoValue * tornadoCommisson + nobleValue * nobleCommisson) * percentAir) / 12);
      totalAir = Math.round((stormValue * stormCommisson + tornadoValue * tornadoCommisson + nobleValue * nobleCommisson) * percentAir);

      airUnit.innerText = totalUnitAir + ' Unit';
      airCommission.innerText = 'Rp ' + totalAir.toLocaleString('id-ID');

      countSalesPoint();
      updateBasicCommission(totalAir, totalWater);
      // countSalesPoint();
    });
  });

  document.getElementById('pembayaran-air').addEventListener('change', () => {
    updateBasicCommission(totalAir, totalWater);
  });

  document.getElementById('pembayaran-water').addEventListener('change', () => {
    updateBasicCommission(totalAir, totalWater);
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

  // wowInput.forEach((input) => {
  //   input.addEventListener("input", function (event) {
  //     const value = parseInt(event.target.value);
  //     const newValue = isNaN(value) ? 0 : value;

  //     // GET QUANTITY PRODUCT
  //     if (event.target.id === "stormNeo") {
  //       stormNeoValue = newValue;
  //     } else if (event.target.id === "stormOmbak") {
  //       stormOmbakValue = newValue;
  //     } else if (event.target.id === "stormCore") {
  //       stormCoreValue = newValue;
  //     }

  //     let paket = stormNeoValue + stormOmbakValue + stormCoreValue;

  //     if(paket >= 2) {
  //       wowInput.disable;
  //     }

  const stormNeoInput = document.getElementById('stormNeo');
  const stormOmbakInput = document.getElementById('stormOmbak');
  const stormCoreInput = document.getElementById('stormCore');

  // Tambahkan event listener untuk setiap elemen input
  stormNeoInput.addEventListener('input', handleInputChange);
  stormOmbakInput.addEventListener('input', handleInputChange);
  stormCoreInput.addEventListener('input', handleInputChange);

  function handleInputChange(event) {
    const value = parseInt(event.target.value);
    const newValue = isNaN(value) ? 0 : value;

    // GET QUANTITY PRODUCT
    if (event.target.id === 'stormNeo') {
      stormNeoValue = newValue;

      if (stormNeoValue == 2) {
        stormNeoInput.disabled = false;
        stormOmbakInput.disabled = true;
        stormCoreInput.disabled = true;

        stormOmbakInput.value = 0;
        stormCoreInput.value = 0;

        stormOmbakValue = 0;
        stormCoreValue = 0;
      } else if (stormNeoValue > 2 || stormNeoValue < 0) {
        stormNeoInput.value = 2;
        stormOmbakInput.value = 0;
        stormCoreInput.value = 0;
        stormNeoValue = 2;
        stormOmbakValue = 0;
        stormCoreValue = 0;
      }
    } else if (event.target.id === 'stormOmbak') {
      stormOmbakValue = newValue;

      if (stormOmbakValue == 2) {
        stormNeoInput.disabled = true;
        stormOmbakInput.disabled = false;
        stormCoreInput.disabled = true;

        stormNeoInput.value = 0;
        stormCoreInput.value = 0;

        stormNeoValue = 0;
        stormCoreValue = 0;
      } else if (stormOmbakValue > 2 || stormOmbakValue < 0) {
        stormNeoInput.value = 0;
        stormOmbakInput.value = 2;
        stormCoreInput.value = 0;
        stormNeoValue = 0;
        stormOmbakValue = 2;
        stormCoreValue = 0;
      }
    } else if (event.target.id === 'stormCore') {
      stormCoreValue = newValue;

      if (stormCoreValue == 2) {
        stormNeoInput.disabled = true;
        stormOmbakInput.disabled = true;
        stormCoreInput.disabled = false;

        stormNeoInput.value = 0;
        stormOmbakInput.value = 0;

        stormNeoValue = 0;
        stormOmbakValue = 0;
      } else if (stormCoreValue > 2 || stormCoreValue < 0) {
        stormNeoInput.value = 0;
        stormOmbakInput.value = 0;
        stormCoreInput.value = 2;
        stormNeoValue = 0;
        stormOmbakValue = 0;
        stormCoreValue = 2;
      }
    }

    const paket = stormNeoValue + stormOmbakValue + stormCoreValue;

    if (paket >= 2) {
      if (stormNeoValue == 2) {
        stormNeoInput.disabled = false;
        stormOmbakInput.disabled = true;
        stormCoreInput.disabled = true;

        stormOmbakInput.value = 0;
        stormCoreInput.value = 0;

        stormOmbakValue = 0;
        stormCoreValue = 0;
      } else if (stormOmbakValue == 2) {
        stormNeoInput.disabled = true;
        stormOmbakInput.disabled = false;
        stormCoreInput.disabled = true;
      } else if (stormCoreValue == 2) {
        stormNeoInput.disabled = true;
        stormOmbakInput.disabled = true;
        stormCoreInput.disabled = false;
      } else if (stormNeoValue + stormOmbakValue == 2) {
        stormNeoInput.disabled = false;
        stormOmbakInput.disabled = false;
        stormCoreInput.disabled = true;
      } else if (stormNeoValue + stormCoreValue == 2) {
        stormNeoInput.disabled = false;
        stormOmbakInput.disabled = true;
        stormCoreInput.disabled = false;
      } else if (stormOmbakValue + stormCoreValue == 2) {
        stormNeoInput.disabled = true;
        stormOmbakInput.disabled = false;
        stormCoreInput.disabled = false;
      } else {
        stormNeoInput.disabled = false;
        stormOmbakInput.disabled = false;
        stormCoreInput.disabled = false;
      }
    } else {
      // Pastikan elemen input diaktifkan kembali jika kondisi tidak terpenuhi
      stormNeoInput.disabled = false;
      stormOmbakInput.disabled = false;
      stormCoreInput.disabled = false;
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

    totalPaket.innerText = paket + ' Paket';

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
  }

  // SALES POINT
  let totalSalesCommission = 0;
  const countSalesPoint = () => {
    const salesPointTotal = document.getElementById('sales-point');
    const salesCommission = document.getElementById('sales-total');
    let salesPointBasic = totalUnitAir + totalUnitWater;

    let pointMax = 7;
    let poinNow = 0;

    if (salesPointBasic > 0) {
      if (salesPointWow > 0 && salesPointBasic > salesPointWow) {
        salesPointTotal.innerText = pointMax - salesPointWow;
        poinNow = pointMax - salesPointWow;

      } else if (salesPointWow > 0 && salesPointBasic < salesPointWow) {
        salesPointTotal.innerText = salesPointBasic;

        poinNow = salesPointBasic;  
      } else if (salesPointWow > 0 && salesPointBasic == salesPointWow) {
        salesPointTotal.innerText = salesPointBasic - 1;

        poinNow = salesPointBasic - 1;
      } else if (salesPointWow == 0) {
        if (salesPointBasic > 7) {
          salesPointBasic = 7;

          salesPointTotal.innerText = salesPointBasic;

          poinNow = salesPointBasic;
        } else {
          salesPointTotal.innerText = salesPointBasic;

          poinNow = salesPointBasic;
        }
      }
    } else {
      salesPointTotal.innerText = 0;

      poinNow = 0;
    }

    if (poinNow == 0) {
      totalSalesCommission = 0;
    } else if (poinNow == 1) {
      totalSalesCommission = 1000000;
    } else if (poinNow == 2) {
      totalSalesCommission = 2500000;
    } else if (poinNow == 3) {
      totalSalesCommission = 4000000;
    } else if (poinNow == 4) {
      totalSalesCommission = 5000000;
    } else if (poinNow == 5) {
      totalSalesCommission = 7000000;
    } else if (poinNow == 6) {
      totalSalesCommission = 7000000;
    } else if (poinNow >= 7) {
      totalSalesCommission = 10000000;
    }

    salesCommission.innerText = 'Rp ' + totalSalesCommission.toLocaleString('id-ID');
  };

  //BONUS PERFORMANCE CALCULATION

  let totalTeam = 0;
  const inputTeam = document.getElementById('performance');
  const incentiveTeam = document.getElementById('performance-incentive');
  const totaltextTeam = document.getElementById('performance-total');

  inputTeam.addEventListener('input', function (event) {
    const value = parseInt(event.target.value);
    const newValue = isNaN(value) ? 0 : value;

    if (newValue === 1) {
      incentiveTeam.innerText = 'Rp 500.000';
      totaltextTeam.innerText = 'Rp 500.000';
      totalTeam = 500000;
    } else if (newValue === 2) {
      incentiveTeam.innerText = 'Rp 1.000.000';
      totaltextTeam.innerText = 'Rp 1.000.000';
      totalTeam = 1000000;
    } else if (newValue === 3) {
      incentiveTeam.innerText = 'Rp 1.500.000';
      totaltextTeam.innerText = 'Rp 1.500.000';
      totalTeam = 1500000;
    } else if (newValue > 3 || newValue < 0) {
      inputTeam.value = 3;
      incentiveTeam.innerText = 'Rp 1.500.000';
      totaltextTeam.innerText = 'Rp 1.500.000';
      totalTeam = 1500000;
    } else if (newValue == 0 || newValue == null) {
      incentiveTeam.innerText = 'Rp 0';
      totaltextTeam.innerText = 'Rp 0';
      totalTeam = 0;
    }

    total();
  });

  const teamIncentive = document.getElementById('performance-incentive');
  // TOTAL COMMISSION
  const total = () => {
    const basicCicilan = document.getElementById('final-basic-cicilan');
    const basicTunai = document.getElementById('final-basic-tunai');
    const wow = document.getElementById('final-wow');
    const sales = document.getElementById('final-sales');
    const performance = document.getElementById('final-performance');
    const total = document.getElementById('final-total');
    const monthly = document.getElementById('final-monthly');
    // let totalMonthly = tunai + cicilan;

    basicCicilan.innerHTML = 'Rp ' + cicilan.toLocaleString('id-ID');
    basicTunai.innerHTML = 'Rp ' + tunai.toLocaleString('id-ID');
    monthly.innerHTML = 'Rp ' + cicilan.toLocaleString('id-ID');
    wow.innerHTML = 'Rp ' + totalCommissionWow.toLocaleString('id-ID');
    sales.innerHTML = 'Rp ' + totalSalesCommission.toLocaleString('id-ID');
    performance.innerHTML = 'Rp ' + totalTeam.toLocaleString('id-ID');
    total.innerHTML = 'Rp ' + Math.round(cicilan + tunai + totalCommissionWow + totalSalesCommission + totalTeam).toLocaleString('id-ID');
  };
});
