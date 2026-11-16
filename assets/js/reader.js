(() => {
  const root = document.body;
  const themeButton = document.querySelector('[data-reader-theme]');
  const sizeInput = document.querySelector('[data-font-size]');
  const sizeOutput = document.querySelector('[data-font-output]');
  const setTheme = light => {
    root.classList.toggle('reader-light', light);
    if (themeButton) { themeButton.textContent = light ? 'Tmavý režim' : 'Světlý režim'; themeButton.setAttribute('aria-pressed', String(light)); }
  };
  const setSize = value => { root.style.setProperty('--reading-size', value + 'px'); if (sizeOutput) sizeOutput.textContent = value + ' px'; };
  const savedTheme = localStorage.getItem('karmin-reader-theme') === 'light';
  const savedSize = localStorage.getItem('karmin-reader-size') || '19';
  setTheme(savedTheme); setSize(savedSize);
  if (sizeInput) { sizeInput.value = savedSize; sizeInput.addEventListener('input', () => { setSize(sizeInput.value); localStorage.setItem('karmin-reader-size', sizeInput.value); }); }
  if (themeButton) themeButton.addEventListener('click', () => { const next = !root.classList.contains('reader-light'); setTheme(next); localStorage.setItem('karmin-reader-theme', next ? 'light' : 'dark'); });
})();