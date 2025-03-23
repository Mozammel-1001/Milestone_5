// Append
// 1. parent node
const mainContainer = document.getElementById('main-container');

// 2. create child node
const placesSection = document.createElement('section');

// crate h1 
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'bandorbon';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Sundorbon';
ul.appendChild(li2)


placesSection.appendChild(ul);


// 3. append placesSEction to the mainContainer
mainContainer.appendChild(placesSection)


// easier to create HTML
const booksSection = document.createElement('section');

booksSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
    <li>Math</li>
    <li>Biology</li>
</ul>
`
mainContainer.appendChild(booksSection)

// Child
// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

// 1. create element and set innerText or innerHTML
const newChild = document.createElement('li');
newChild.innerText = 'New born footballer here';

// 2. find the parent where you will add the child
const playersList = document.getElementById('player-list');

// 3. append the child to the parent
playersList.appendChild(newChild);

// CSS in JS
// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(sections);
for (const section of sections) {
    // console.log(section);
    section.style.backgroundColor = 'lightblue'
    section.style.border = '3px solid green';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '10px';
}

// const placeContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

// dynamic class
for (const section of sections) {
    // section.classList.add('section-card')
}
