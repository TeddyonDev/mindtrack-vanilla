document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('journal-form');
  const moodSelect = document.getElementById('mood-select');
  const journalText = document.getElementById('journal-text');

  
  const message = document.createElement('p');
  message.id = 'entry-saved-message';
  form.insertAdjacentElement('afterend', message);
  

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the page from refreshing

    const mood = moodSelect.value;
    const text = journalText.value.trim();

    if (text === '') return; // Don't submit if there's no text

    const entry = {
      mood: mood,
      text: text,
      timestamp: new Date().toISOString(),
    };

    const entries = JSON.parse(localStorage.getItem('entries') || '[]');
    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));

    // Set and display the success message
    message.textContent = 'Entry saved!';
    message.classList.add('show'); // Show the message
    setTimeout(() => {
      message.classList.remove('show'); // Hide the message after 2 seconds
    }, 2000);

    journalText.value = ''; // Clear text after submission
    renderEntries(); // Refresh the entry list
  });

  function renderEntries() {
    const entries = JSON.parse(localStorage.getItem('entries') || '[]');
    // Render the entries if needed, we can add this to your dashboard
  }

  renderEntries(); // Initial load of entries
});
