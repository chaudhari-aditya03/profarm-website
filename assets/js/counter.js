const countEl = document.getElementById('count');

async function fetchCount() {
  const res = await fetch('/count', {cache: 'no-store'});
  return res.ok ? res.json() : null;
}

async function registerVisit() {
  try {
    await fetch('/visit', { method: 'POST' });
  } catch (e) {
    // ignore
  }
}

async function update() {
  try {
    const json = await fetchCount();
    if (json && typeof json.count !== 'undefined') countEl.textContent = json.count;
    else countEl.textContent = 'N/A';
  } catch (e) {
    countEl.textContent = 'N/A';
  }
}

(async function init(){
  // register this page load as a visit
  await registerVisit();
  await update();
  // poll for live updates
  setInterval(update, 5000);
})();
