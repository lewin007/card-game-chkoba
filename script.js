document.addEventListener("DOMContentLoaded", function() {
    const cardGrid = document.querySelector('.card-grid');
    const resetButton = document.getElementById('resetButton');
  
    // Create an array for cards 1 through 10 with an initial count of 0
    const cards = [];
    for (let i = 1; i <= 10; i++) {
      cards.push({ number: i, count: 0 });
    }
  
    // Function to render card elements
    function renderCards() {
      cardGrid.innerHTML = '';
      cards.forEach((card, index) => {
        // Create card container
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
  
        // Create and set number element
        const numberElem = document.createElement('div');
        numberElem.className = 'number';
        numberElem.textContent = card.number;
  
        // Create and set count element
        const countElem = document.createElement('div');
        countElem.className = 'count';
        countElem.textContent = card.count;
  
        // Create button group container
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';
  
        // Create plus button
        const plusButton = document.createElement('button');
        plusButton.textContent = '+';
        plusButton.addEventListener('click', function() {
          if (card.count < 4) {
            card.count++;
            renderCards();
          }
        });
  
        // Create minus button
        const minusButton = document.createElement('button');
        minusButton.textContent = '-';
        minusButton.addEventListener('click', function() {
          if (card.count > 0) {
            card.count--;
            renderCards();
          }
        });
  
        // Append buttons to the group
        buttonGroup.appendChild(minusButton);
        buttonGroup.appendChild(plusButton);
  
        // Append elements to the card container
        cardDiv.appendChild(numberElem);
        cardDiv.appendChild(countElem);
        cardDiv.appendChild(buttonGroup);
  
        // Append card to grid
        cardGrid.appendChild(cardDiv);
      });
    }
  
    // Initial render of cards
    renderCards();
  
    // Reset all counts to zero when reset button is clicked
    resetButton.addEventListener('click', function() {
      cards.forEach(card => card.count = 0);
      renderCards();
    });
  });
  