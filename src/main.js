
const firebaseConfig = {
  apiKey: "AIzaSyAM1mn3jJY86f0eTYixRDQU5sN3-SMYQE4",
  authDomain: "facetoface-fee8a.firebaseapp.com",
  databaseURL: "https://facetoface-fee8a-default-rtdb.firebaseio.com",
  projectId: "facetoface-fee8a",
  storageBucket: "facetoface-fee8a.appspot.com",
  messagingSenderId: "183493609614",
  appId: "1:183493609614:web:51fe50a7c9857380eda1df"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
const facetofaceDB = firebase.database().ref('facetoface')

document.getElementById('dadosForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementValue('name');
  var emailid = getElementValue('emailid');
  var msgContent = getElementValue('msgContent');

  saveMessage(name, emailid, msgContent);

  document.querySelector('.alert').style.display = 'block';

  //remove the alert 
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  document.getElementById('dadosForm').reset();
}


const saveMessage = (name, email, msgContent) => {
  const newUserForm = facetofaceDB.push();
  newUserForm.set({
    name: name,
    emailid: email,
    msgContent: msgContent
  })
}

const getElementValue = (id) => {
  return document.getElementById(id).value
}