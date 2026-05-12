// 보스 데이터 로드
const bossData = {};
fetch('{{ "/assets/data/boss_data.yml" | relative_url }}')
  .then(res => res.text())
  .then(text => {
    const data = jsyaml.load(text);
    data.forEach(item => bossData[item.name] = item.gates);
  });

const thresholds = {
  4: { "투사": [0,29], "강직한 투사": [30,39], "잔혹한 혈투사": [40,100] },
  8: { "투사": [0,14], "강직한 투사": [15,19], "잔혹한 혈투사": [20,100] }
};

function updateGates() {
  const raid = document.getElementById('raid-select').value;
  const gateSelect = document.getElementById('gate-select');
  gateSelect.innerHTML = '<option value="">관문을 선택하세요</option>';
  if (!bossData[raid]) return;
  Object.keys(bossData[raid]).forEach(g => {
    gateSelect.insertAdjacentHTML('beforeend', `<option>${g}</option>`);
  });
}

function updateBossHp() {
  const raid = document.getElementById('raid-select').value;
  const gate = document.getElementById('gate-select').value;
  if (bossData[raid] && bossData[raid][gate]) {
    document.getElementById('boss-hp').value = bossData[raid][gate];
  }
}

function calculateContribution() {
  const hp = parseFloat(document.getElementById('boss-hp').value);
  const dmg = parseFloat(document.getElementById('user-damage').value);
  const ps = parseInt(document.getElementById('party-size').value);
  if (!hp || !dmg || ![4,8].includes(ps)) {
    alert('모든 항목을 올바르게 입력해주세요.'); return;
  }

  const bossHp = hp * 1e8;
  const userDmg = dmg * 1e8;
  const pct = (userDmg/bossHp)*100;
  let grade = '등급 없음';
  Object.entries(thresholds[ps]).some(([title, [min,max]]) => {
    if (pct>=min && (max===100||pct<max)) { grade=title; return true; }
  });

  document.getElementById('results').hidden = false;
  document.getElementById('results').innerHTML = `
    <h3>계산 결과</h3>
    <p>보스 체력: ${hp}억</p>
    <p>입힌 데미지: ${dmg}억</p>
    <p>기여도: ${pct.toFixed(2)}%</p>
    <p>등급: <span class="grade">${grade}</span></p>
    <p>파티 인원: ${ps}명</p>
  `;
}

function showThresholdTable() {
  const hp = parseFloat(document.getElementById('boss-hp').value);
  const ps = parseInt(document.getElementById('party-size').value);
  if (!hp || ![4,8].includes(ps)) {
    alert('보스 체력과 공대 인원을 입력해주세요.'); return;
  }

  const bossHp = hp*1e8;
  const rows = Object.entries(thresholds[ps]).map(([title,[min,max]]) => {
    const minD = (bossHp*min/100)/1e8;
    const maxD = max===100 ? '무제한' : ((bossHp*max/100)/1e8).toFixed(2);
    const pr = max===100 ? `${min}% 이상` : `${min}% - ${max}%`;
    return `<tr>
      <td>${title}</td>
      <td>${pr}</td>
      <td>${minD.toFixed(2)}억${max!==100?` ~ ${maxD}억`:' 이상'}</td>
    </tr>`;
  }).join('');

  document.getElementById('threshold-table').hidden = false;
  document.getElementById('threshold-table').innerHTML = `
    <h3>${hp}억 체력 - ${ps}인 파티 기준표</h3>
    <table class="threshold-table-data">
      <thead><tr><th>등급</th><th>기여도</th><th>필요 데미지</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}
