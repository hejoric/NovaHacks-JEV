fetch('data/transfer-guides.json')
  .then(res => res.json())
  .then(data => {
    const dropdown = document.getElementById('university-dropdown');
    const guideDisplay = document.getElementById('guide-display');

    data.guides.forEach(guide => {
      const option = document.createElement('option');
      option.value = guide.name;
      option.textContent = guide.name;
      dropdown.appendChild(option);
    });

    dropdown.addEventListener('change', () => {
      const selected = dropdown.value;
      const selectedGuide = data.guides.find(g => g.name === selected);
      guideDisplay.innerHTML = selectedGuide
        ? `<h3>${selectedGuide.name}</h3><p>${selectedGuide.details}</p>`
        : '';
    });
  });
