// 1. where to add
const placesList = document.getElementById('places-list')
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'Pharatoli bon'

// 3. add the child
placesList.appendChild(li);

//-------> How to add section in DOM <-------

// 1. where to add
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'MY FOOD LIST';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Biryani";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "Borhani";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "Salad";
ul.appendChild(li3);
 
section.appendChild(ul); 
mainContainer.appendChild(section);


// set innerHTML directly 
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress Section </h1>
<ul>
   <li> T-Shirt </li>
   <li> Lungi </li>
   <li> Sando Genji </li>
   </ul>
`
mainContainer.appendChild(sectionDress);
