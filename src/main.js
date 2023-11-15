import firebase from "firebase/compat/app";

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
firebase.initializeApp(firebaseConfig);

// Reference your database
const facetofaceDB = firebase.database().ref('facetoface')

/**
 * @type {HTMLElement}
 */

document.querySelector('#dadosForm').addEventListener('submit', submitForm);

/**
 * 
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
   * @type {HTMLElement} Elemento DOM com a classe 'alert'.
   * 
   */

  document.querySelector('.alert').style.display = 'block';

  //remove the alert 
  setTimeout(() => {

    /**
  * @type {HTMLElement} Elemento DOM com a classe 'alert'.
  */

    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  document.getElementById('dadosForm').reset();
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
 * 
 * @param {*} id 
 * @returns 
 */

const getElementValue = (id) => {

  /**
   * @type {HTMLInputElement}
   */
  return document.getElementById(id).value
}
