// Select elements
const journalForm = document.getElementById('JournalForm');
const entryInput = document.getElementById('entry');
const entriesList = document.getElementById('entriesList');

// Load past entries from localStorage when the page loads
window.onload = function() {
  const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
  savedEntries.forEach(entry => {
      const listItem = document.createElement('li');

      const entryContainer = document.createElement('div');
      entryContainer.className = 'entry-container';

      const textSpan = document.createElement('span');
      textSpan.textContent = entry;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-btn');

      entryContainer.appendChild(textSpan);
      entryContainer.appendChild(deleteButton);
      listItem.appendChild(entryContainer);
      entriesList.appendChild(listItem);
  });
};

// Event listener for form submission
journalForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const newEntry = entryInput.value.trim();
  if (newEntry === '') {
      alert('Please write something!');
      return;
  }

  const listItem = document.createElement('li');

  const entryContainer = document.createElement('div');
  entryContainer.className = 'entry-container';

  const textSpan = document.createElement('span');
  textSpan.textContent = newEntry;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');

  entryContainer.appendChild(textSpan);
  entryContainer.appendChild(deleteButton);
  listItem.appendChild(entryContainer);
  entriesList.appendChild(listItem);

  const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
  savedEntries.push(newEntry);
  localStorage.setItem('entries', JSON.stringify(savedEntries));

  entryInput.value = '';
});


// Event listener for delete buttons
entriesList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const listItem = event.target.parentElement;
        const entryText = listItem.textContent.replace('Delete', '').trim();

        // Remove the entry from the DOM
        listItem.remove();

        // Remove the entry from localStorage
        let savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
        savedEntries = savedEntries.filter(entry => entry !== entryText);
        localStorage.setItem('entries', JSON.stringify(savedEntries));
    }
});
