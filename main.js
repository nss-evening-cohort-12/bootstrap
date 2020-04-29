const ducks = [
  {
    color: 'blue',
    name: 'Joe',
    breed: 'mallard',
    size: 'small',
    temperament: 'angry',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.bigcommerce.com%2Fs-nf2x4%2Fimages%2Fstencil%2F1280x1280%2Fproducts%2F501%2F3203%2Fblue2__53630.1507385362.png%3Fc%3D2&f=1&nofb=1',
    gender: 'male',
    age: 10,
    isRubber: true,
  },
  {
    color: 'blue',
    name: 'Jim',
    breed: 'mallard',
    size: 'medium',
    temperament: 'angry',
    imageUrl: 'https://3.bp.blogspot.com/-EdvLRLEUnfM/TazKG7zVMpI/AAAAAAAAAJo/HZ-2NsFPy0A/s1600/blue+mallard.jpg',
    gender: 'male',
    age: 20,
    isRubber: false,
  },
  {
    color: 'red',
    name: 'Jane',
    breed: 'mallard',
    size: 'large',
    temperament: 'angry',
    imageUrl: 'https://cdn3.volusion.com/wxkpe.ruopa/v/vspfiles/photos/Redhead-Duck-2.jpg',
    gender: 'female',
    age: 30,
    isRubber: false,
  },
  {
    color: 'red',
    name: 'Jerry',
    breed: 'mallard',
    size: 'small',
    temperament: 'angry',
    imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2017/07/Pirate-red-rubber-duck-front-Amsterdam-Duck-Store.png',
    gender: 'male',
    age: 40,
    isRubber: true,
  },
  {
    color: 'red',
    name: 'Joan',
    breed: 'mallard',
    size: 'medium',
    temperament: 'angry',
    imageUrl: 'https://images.blogthings.com/whatcolorrubberduckieareyouquiz/red.jpg',
    gender: 'female',
    age: 50,
    isRubber: true,
  },
  {
    color: 'yellow',
    name: 'Janet',
    breed: 'mallard',
    size: 'large',
    temperament: 'angry',
    imageUrl: 'https://4.bp.blogspot.com/-28JWho2EmXI/UDd98XboSuI/AAAAAAAAESg/1QnuEXUp3oM/s1600/Yellow-Duck-4.jpg',
    gender: 'female',
    age: 60,
    isRubber: false,
  },
  {
    color: 'yellow',
    name: 'Jessica',
    breed: 'mallard',
    size: 'small',
    temperament: 'angry',
    imageUrl: 'https://4.bp.blogspot.com/-4YFhI67MT-Q/U0b9G36NeYI/AAAAAAAACQA/nEMdbO1z4Ds/s1600/0360+Mallard+x+Yellow-billed+Duck,+Porth+Hellick,+9-Aug-10+(A3)+L.JPG',
    gender: 'female',
    age: 70,
    isRubber: false,
  },
  {
    color: 'yellow',
    name: 'Frank',
    breed: 'mallard',
    size: 'medium',
    temperament: 'angry',
    imageUrl: 'https://apenyo.files.wordpress.com/2011/05/ducky.jpg',
    gender: 'male',
    age: 80,
    isRubber: true,
  },
];

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
};

const buildDucks = (duckCollection) => {
  let domString = '<div class="row">';

  for (let i = 0; i < duckCollection.length; i++) {
    const duck = duckCollection[i];

    domString += `
      <div class="card-seperation col-md-6 col-lg-4">
        <div class="card duck">
          <img src="${duck.imageUrl}" class="card-img-top rounded mx-auto d-block">
          <div class="card-body">
            <h5 class="card-title">${duck.name}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Age: ${duck.age}</li>
              <li class="list-group-item">Size: ${duck.size}</li>
              <li class="list-group-item">Temperament: ${duck.temperament.toUpperCase()}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  domString += '</div>';

  printToDom('#duckContainer', domString);
};

const filterDucks = (event) => {
  const buttonId = event.target.id;

  if (buttonId === 'all') {
    buildDucks(ducks);
    return;
  }

  const key = event.target.attributes['data-filter'].value;
  const lilDucks = [];

  for (let i = 0; i < ducks.length; i++) {
    const duck = ducks[i];
    if (buttonId === 'rubber' && !duck.isRubber) {
      lilDucks.push(duck);
      continue;
    } 
    
    if (duck[key] === buttonId) {
      lilDucks.push(duck);
    }
  }

  buildDucks(lilDucks);
};

const clickEvents = () => {
  document.querySelector('#small').addEventListener('click', filterDucks);
  document.querySelector('#medium').addEventListener('click', filterDucks);
  document.querySelector('#large').addEventListener('click', filterDucks);
  document.querySelector('#male').addEventListener('click', filterDucks);
  document.querySelector('#female').addEventListener('click', filterDucks);
  document.querySelector('#rubber').addEventListener('click', filterDucks);
  document.querySelector('#all').addEventListener('click', filterDucks);
};

const init = () => {
  buildDucks(ducks);
  clickEvents();
};

init();
