const firebaseConfig = {
  apiKey: "AIzaSyAM1mn3jJY86f0eTYixRDQU5sN3-SMYQE4",
  authDomain: "facetoface-fee8a.firebaseapp.com",
  databaseURL: "https://facetoface-fee8a-default-rtdb.firebaseio.com",
  projectId: "facetoface-fee8a",
  storageBucket: "facetoface-fee8a.appspot.com",
  messagingSenderId: "183493609614",
  appId: "1:183493609614:web:51fe50a7c9857380eda1df"
};

// Inicializa o Firebase
// @ts-ignore
firebase.initializeApp(firebaseConfig);

// Reference your database
// @ts-ignore
const facetofaceDB = firebase.database().ref('facetoface')

/**
 * @property {HTMLFormElement} as formElement
 */

const formElement = document.getElementById('dadosForm');

if (formElement) {
  // @ts-ignore
  formElement.reset();
  formElement.addEventListener('submit', submitForm);
} else {
  console.error('Elemento com id "dadosForm" não encontrado');
}

/**
 * @param {Event} e 
 */

function submitForm(e) {
  e.preventDefault();

  let name = getElementValue('name');
  let age = getElementValue('age');
  let role = getElementValue('role');
  let social_link = getElementValue('social_link');
  let hobby = getElementValue('hobby');
  let avatar = getElementValue('avatar');

  saveMessage(name, age, role, social_link, hobby, avatar);


  /**
   * @property {HTMLElement} as alertElement
   */

  const alertElement = document.querySelector('.alert');


  if (alertElement) {

    // @ts-ignore
    alertElement.style.display = 'block';

    // Remova o alerta após 3 segundos
    setTimeout(() => {
  
      // @ts-ignore
      alertElement.style.display = 'none';
    }, 3000);
  }

}

/**
 * 
 * @param {string} name 
 * @param {number} age 
 * @param {string} role 
 * @param {string} social_link 
 * @param {string} hobby 
 * @param {string} avatar 
 */

const saveMessage = (name, age, role, social_link, hobby, avatar) => {
  const newUserForm = facetofaceDB.push();
  newUserForm.set({
    name: name,
    age: age,
    role: role,
    social_link: social_link,
    hobby: hobby,
    avatar: avatar
  })
}

/**
 * @param {string } id 
 * @returns 
 */

const getElementValue = (id) => {
  // @ts-ignore
  return document.getElementById(id).value
}