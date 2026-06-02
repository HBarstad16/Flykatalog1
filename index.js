let aktivFilter = "alle";

function filtrer(btn, type) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  aktivFilter = type;
  oppdater();
}

function lagKort(fly) {
  const specs = Object.entries(fly.specs).map(([label, value]) => `
    <div class="spec">
      <span class="spec-label">${label}</span>
      <span class="spec-val">${value}</span>
    </div>
  `).join("");

  const brukere = fly.brukere.map(land => `<span class="land-tag">${land}</span>`).join("");

  return `
    <article class="fly-kort" onclick="window.location.href='fly.html?id=${fly.id}'">
      <div class="kort-topp">
        <div>
          <div class="fly-navn">${fly.navn}</div>
          <div class="fly-sub">${fly.sub}</div>
        </div>
        <span class="gen-badge">${fly.badge}</span>
      </div>

      <div class="silhouette">
        <img src="${fly.bilde}" alt="${fly.navn}" onerror="this.style.display='none'; this.parentElement.innerHTML='Legg bilde i ${fly.bilde}'">
      </div>

      <div class="specs">${specs}</div>

      <div>
        <div class="brukere-label">NATO-operatører</div>
        <div class="brukere">${brukere}</div>
      </div>

      <div class="highlight">${fly.highlight}</div>
    </article>
  `;
}

function oppdater() {
  const q = document.getElementById("search").value.toLowerCase().trim();

  const filtrert = flyData.filter(fly => {
    const typeOk = aktivFilter === "alle" || fly.type === aktivFilter;
    const sokTekst = [fly.navn, fly.sub, fly.type, fly.search, ...fly.brukere].join(" ").toLowerCase();
    const sokOk = q === "" || sokTekst.includes(q);
    return typeOk && sokOk;
  });

  document.getElementById("flyGrid").innerHTML = filtrert.map(lagKort).join("");
  document.getElementById("ingen").style.display = filtrert.length === 0 ? "block" : "none";
}

oppdater();
