const harry = { name: 'Harry Potter', hair: 'black' };

const ron = { name: 'Ron Weasley', hair: 'red' };

const hermione = { name: 'Hermione Granger', hair: 'brown' };

const combineTheWizards = (...wizards) => {
  const list = document.getElementById('list');
  wizards.forEach(all => {
    const listItem = document.createElement('li');
    listItem.textContent = all.name;
    listItem.style.cssText = `color: ${all.hair}`;
    list.appendChild(listItem);
  })
}

combineTheWizards(harry, ron, hermione);