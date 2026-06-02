const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const fly = flyData.find(f => f.id === id);
const detail = document.getElementById("detailContent");

if (!fly) {
  detail.innerHTML = `
    <div class="not-found">
      <h1>Fly ikke funnet</h1>
      <p>Prøv å åpne siden fra katalogen, eller sjekk at URL-en har riktig id.</p>
      <p>Eksempel: <strong>fly.html?id=f-35-lightning-ii</strong></p>
    </div>
  `;
} else {
  document.title = fly.navn;

  const specs = Object.entries(fly.specs).map(([label, value]) => `
    <div class="detail-spec-row">
      <span>${label}</span>
      <span>${value}</span>
    </div>
  `).join("");

  const brukere = fly.brukere.map(land => `<span class="land-tag">${land}</span>`).join("");

  detail.innerHTML = `
    <h1 class="detail-title">${fly.navn}</h1>
    <p class="detail-sub">${fly.sub} · ${fly.badge}</p>

    <div class="detail-layout">
      <div>
        <div class="detail-image">
          <img src="${fly.bilde}" alt="${fly.navn}" onerror="this.style.display='none'; this.parentElement.innerHTML='Legg bilde i ${fly.bilde}'">
        </div>
        <p class="detail-text">${fly.innhold}</p>
      </div>

      <aside>
        <div class="detail-specs">${specs}</div>
        <div style="margin-top: 20px;">
          <div class="brukere-label">NATO-operatører</div>
          <div class="brukere">${brukere}</div>
        </div>
      </aside>
    </div>
  `;
}
