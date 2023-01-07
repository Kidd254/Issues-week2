/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const menuBox= document.getElementById('menu');
const menuBar= document.getElementById('menu_bar');
const closingBtn = document.getElementById('btn');
const menuItems = document.getElementsByClassName('h-menu');
const menuContainer = document.getElementsByClassName('menu-items');


menuBar.addEventListener('click', ()=>{
  menuBox.style.display = 'flex';
  menuBox.classList.toggle('open-menu');
  menuBar.style.display= 'none';
  closingBtn.style.display='block';
  menuContainer[0].style.display='block';
});

for (let i=0; i<menuItems.length; i++) {
  menuItems[i].onclick= function() {
    menuBox.style.display = 'none';
    menuBox.classList.toggle('open-menu');
    closingBtn.style.display='none';
    menuBar.style.display= 'block';
    menuContainer[0].style.display='none';
  };
}

closingBtn.addEventListener('click', ()=>{
  menuBox.style.display = 'none';
  menuBox.classList.toggle('open-menu');
  menuBar.style.display= 'block';
  closingBtn.style.display='none';
  menuContainer[0].style.display='none';
});

const popDisplays= document.getElementById('pop');

popDisplay.addEventListener('click', ()=>{
  popUp(sectionsCard[0]);
});

const popDisplay1= document.getElementById('pop1');

popDisplay1.addEventListener('click', ()=>{
  popUp(sectionsCard[1]);
});

const popDisplay2= document.getElementById('pop2');

popDisplay2.addEventListener('click', ()=>{
  popUp(sectionsCard[2]);
});

const popDisplay3= document.getElementById('pop3');

popDisplay3.addEventListener('click', ()=>{
  popUp(sectionsCard[3]);
});

const sectionsCard = [
  {
    title: 'Tonic',
    list: ['Canopy', 'Back end Dev', '2015'],
    description:
    'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio-pop-mobile.png',
    image2: './images/Snapshoot Portfolio desk 1.png',
    btnImg: 'images/Vector github.png',
    btnImg2: 'images/Icon.png',
  },
  {
    title: 'Multi-Post Stories',
    list: ['Canopy', 'Back end Dev', '2015'],
    description:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio mobile2.png',
    image2: './images/Snapshoot Portfolio desk 2.png',
    btnImg: 'images/Vector github.png',
    btnImg2: 'images/Icon.png',
  },
  {
    title: 'Tonic',
    list: ['Canopy', 'Back end Dev', '2015'],
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio mobile3.png',
    image2: './images/Snapshoot Portfolio-pop-desk.png',
    btnImg: 'images/Vector github.png',
    btnImg2: 'images/Icon.png',
  },
  {
    title: 'Multi-Post Stories',
    list: ['Canopy', 'Back end Dev', '2015'],
    description:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technology: ['html', 'css', 'javascript'],
    liveLink: 'https://kidd254.github.io/Lawrence-s-Portfolio/',
    sourceLink: 'https://github.com/Kidd254/Lawrence-s-Portfolio',
    image: './images/Snapshoot Portfolio3.png',
    image2: './images/Snapshoot Portfolio desk3.png',
    btnImg: 'images/Vector github.png',
    btnImg2: 'images/Icon.png',
  },
];

const popUp = (info) => {
  const popUpContainer = document.createElement('section');
  popUpContainer.id = 'pop-up-main';
  popUpContainer.innerHTML = `<div class="pop-content">
    <div class="pop-up-header">
      <h1 class="section-titled">${info.title}</h1>
     
        <i class="fa-solid fa-xmark" id="btnd"></i>
     
    </div>
    <ul class="dynamic-list">
      <li class="info1">${info.list[0]}</li>
      <li class="info2">${info.list[1]}</li>
      <li class="info3">${info.list[2]}</li>
      </ul>
    <div class="pop-up-image"><img src="${info.image}"></div>
    <div class="pop-up-image-desk"><img src="${info.image2}"></div>
    <div class="pop-up-content">
      <p class="pop-up-description">${info.description}</p>
      </p>
    <ul class="category">
      <li class="cat1">${info.technology[0]}</li>
      <li class="cat2">${info.technology[1]}</li>
      <li class="cat3">${info.technology[2]}</li>
    </ul>
      </ul>
    </div>
    <div class="pop-up-buttons">
    <div class="buttons">
    <button class= 'btn1' id="w2button1"><a class="prj"href="${info.liveLink}">See Project<img class="btn-img" src="${info.btnImg2}"></a></button>
    <button class="btn1" id="w2button2"><a class="prj2"href="${info.sourceLink}"> See Live</a><img class="btn-img2"src="${info.btnImg}"></button>
    </div>
    <div class="popping">
    <div class="pop-up-content1">
      <p class="pop-up-description1">${info.description}</p>
      </p>
      </div>
      <div class="left">
    <ul class="category1">
      <li class="cat11">${info.technology[0]}</li>
      <li class="cat22">${info.technology[1]}</li>
      <li class="cat33">${info.technology[2]}</li>
    </ul>
      </ul>
    
    <div class="buttons1">
    <button class= 'btn11' id="w2button10"><a class="prjj"href="${info.liveLink}">See Project<img class="btn-img1" src="${info.btnImg2}"></a></button>
    <button class="btn11" id="w2button11"><a class="prj22"href="${info.sourceLink}"> See Live</a><img class="btn-img22"src="${info.btnImg}"></button>
    </div>
    </div>


    
    </div>
  </div>
  `;


  document.body.appendChild(popUpContainer);
  const closingBtn = document.getElementById('btnd');
  closingBtn.addEventListener('click', () => {
    popUpContainer.remove();
  });
};

// eslint-disable-next-line require-jsdoc
function revealInformation(input, information) {
  const message = input.parentNode.querySelector('small');
  const emailContent = document.getElementById('email');
  message.innerText = information;

  message.className = 'error';
  emailContent.className = 'error-display';
}

function revealError(input, information) {
  return revealInformation(input, information, false);
}

// eslint-disable-next-line require-jsdoc
function validateEmail(input, _invalidMessage) {
  const email = input.value.trim();
  if (!(email === String(email).toLowerCase())) {
    return revealError(input, _invalidMessage);
  }
  return true;
}

const contactForm = document.querySelector('#form-contact');

const EMAIL_INVALID = 'Enter email in lowercase';

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailIsValid = validateEmail(contactForm.elements.email, EMAIL_INVALID);

  if (emailIsValid) {
    contactForm.submit();
  }
});

const dataform = {
  name: '',
  email: '',
  message: '',
};
dataForm = JSON.parse(localStorage.getItem('data')) || infoobj. infoObj;

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userText = document.getElementById('message');

userName.addEventListener('input', () => {
  dataForm.name = userName.value;
  localStorage.setItem('info', JSON.stringify(dataForm));
});

userEmail.addEventListener('input', () => {
  dataForm.email = userEmail.value;
  localStorage.setItem('info', JSON.stringify(dataForm));
});

userText.addEventListener('input', () => {
  dataForm.message = userText.value;
  localStorage.setItem('info', JSON.stringify(dataForm));
});

if (localStorage.getItem('info')) {
  let objectForm = localStorage.getItem('info');
  objectForm = JSON.parse(objectForm);

  document.getElementById('name').value = objectForm.name;
  document.getElementById('email').value = objectForm.email;
  document.getElementById('message').value = objectForm.message;
}
