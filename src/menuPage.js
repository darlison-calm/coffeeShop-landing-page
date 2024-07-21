import '/src/styles.css'

export default function loadMenu() {
  const content = document.getElementById('content');

  const menuContainer = document.createElement('table');
  menuContainer.style.borderCollapse = 'separate'; // Use 'separate' for space between cells
  menuContainer.style.borderSpacing = '15px'; // Adjust the spacing between cells
  menuContainer.classList.add('menu-content')
  
  const headerRow = document.createElement('tr');
  
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Type';
  headerRow.appendChild(nameHeader);

  const priceHeader = document.createElement('th');
  priceHeader.textContent = 'Price';
  headerRow.appendChild(priceHeader);

  menuContainer.appendChild(headerRow)

  const coffeeItems = [
    { name: 'Espresso', price: 'R$2.50' },
    { name: 'Latte', price: 'R$3.00' },
    { name: 'Cappuccino', price: 'R$3.20' },
    { name: 'Americano', price: 'R$2.80' },
    { name: 'Mocha', price: '$3.50' },
    { name: 'Macchiato', price: '$3.10' },
  ];

  coffeeItems.forEach(item => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;

    const priceCell = document.createElement('td');
    priceCell.textContent = item.price;

    row.appendChild(nameCell);
    row.appendChild(priceCell);

    menuContainer.appendChild(row)
  })

  content.appendChild(menuContainer);
}

