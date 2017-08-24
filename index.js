// let friends = [
//      {
//         firstName: 'Ivan ',
//         lastName: 'Gates ',
//         number: '(093) 555-5555 ',
//         email: 'Ivan@gmail.com '
//     },
//     {
//         firstName: 'Andrew ',
//         lastName: 'Sveichek ',
//         number: '(093) 444-4444 ',
//         email: 'Andrew@gmail.com '
//     },
//     {
//         firstName: 'David ',
//         lastName: 'Chouk ',
//         number: '(093) 333-3333 ',
//         email: 'David@gmail.com '
//     }
// ];


// localStorage.setItem('friendsList', JSON.stringify(friends));
// let  retrievedObjectStr = localStorage.getItem('friendsList');
// let obtainedFriendsObj = JSON.parse(retrievedObjectStr);
// console.log(obtainedFriendsObj);

let friends = JSON.parse(localStorage.getItem('friendsList')) || [];

function editContact(friendPosition) {
    console.log('>>>>CONTACT IS EDITED');
    addContact(friends[friendPosition]);
}

function showListContacts() {
    let listContainer = document.getElementById('contacts');
    listContainer.innerHTML = '';



    for (let i = 0; i < friends.length; i++) {
        let contact = document.createElement('div');

        contact.innerHTML =
            '<div class="name" onclick="showInformationAboutContact()">' + friends[i].firstName + '&nbsp;' +friends[i].lastName +
            '<button id="button-edit" onclick="editContact(' + i + ')" >Edit</button>' + '</div>' +
            '<div class="email" style="display: none">' + friends[i].email + '</div>' +
            '<div class="number" style="display: none">' + friends[i].number + '</div>';

        listContainer.appendChild(contact);

        //contact.addEventListener('click', editContact);
    //document.getElementById('button-edit').innerHTML = ;

    }


}

showListContacts();


function showInformationAboutContact() {
    let form = document.getElementById('contact');
    let emailInf = document.getElementsByClassName('email')[0] ;
    let phoneNumber = document.getElementsByClassName('number')[0];
    if (form.style.display === 'none'){
    emailInf.style.display = 'block';
    phoneNumber.style.display = 'block';
    } else {
        emailInf.style.display = 'none';
        phoneNumber.style.display = 'none';
    }
}


function addContact(contact) {
     let form = document.getElementById('contact');
     let list = document.getElementById('contacts');
     let search = document.getElementById('search');
     let save = document.getElementById('button-save');
     let add = document.getElementById('button-add');
     if (form.style.display === 'none'){
         form.style.display = 'block';
         list.style.display = 'none';
         search.style.display = 'none';
         save.style.display = 'inline-block';
         document.getElementById('button-add').innerHTML = 'cansel';
     } else {
         form.style.display = 'none';
         list.style.display = 'block';
         search.style.display = 'block';
         save.style.display = 'none';
         document.getElementById('button-add').innerHTML = 'add contact';

     }

     if (contact) {
         document.getElementById('firstname').value = contact.firstName;
         document.getElementById('lastname').value = contact.lastName;
         document.getElementById('email').value = contact.email;
         document.getElementById('number').value = contact.number;
     }
}

function addPhone() {
    let phone = document.getElementById('phone');
    phone.style.display = 'block';
}

function saveContact(){
    let userName = document.getElementById('firstname').value;
    let userSurname = document.getElementById('lastname').value;
    let userEmail = document.getElementById('email').value;
    let userNumber = document.getElementById('number').value;
    let user = {
        firstName: userName,
        lastName: userSurname,
        number: userNumber,
        email: userEmail
    };
    addUserToLocalStorage(user);
    console.log(user);
    showListContacts();
}

function addUserToLocalStorage(friend) {
    let friends = JSON.parse(localStorage.getItem('friendsList')) || [];
    friends.push(friend);
    localStorage.setItem('friendsList', JSON.stringify(friends));
}


