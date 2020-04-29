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
  let domString = '';

  for (let i = 0; i < duckCollection.length; i++) {
    const duck = duckCollection[i];

    domString += `
      <div class="duck">
        <h1>${duck.name}</h1>
        <img src="${duck.imageUrl}">
        <p>Age: ${duck.age}</p>
        <p>Size: ${duck.size}</p>
        <p>Temerament: ${duck.temperament.toUpperCase()}</p>
      </div>
    `;
  }

  printToDom('#duckContainer', domString);
};

const init = () => {
  buildDucks(ducks);
};

init();
