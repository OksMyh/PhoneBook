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


function showListContacts() {
    let listContainer = document.getElementById('contacts');
    listContainer.innerHTML = '';

    let friends = JSON.parse(localStorage.getItem('friendsList')) || [];

    for (let i = 0; i < friends.length; i++) {
        let contact = document.createElement('div');

        contact.innerHTML = '<div class="name">' + friends[i].firstName + '</div>' +
            '<div class="surname">' + friends[i].lastName + '</div>' +
            '<div class="email">' + friends[i].email + '</div>' +
            '<div class="number">' + friends[i].number + '</div>';

        listContainer.appendChild(contact);

        contact.addEventListener('click', editContact);

        function editContact() {
            console.log('>>>>CONTACT IS EDITED');

            addContact(friends[i]);
        }
    }
}
showListContacts();

function addContact(contact) {
     let form = document.getElementById('contact');
     let list = document.getElementById('contacts');
     let search = document.getElementById('search');
     if (form.style.display === 'none'){
         form.style.display = 'block';
         list.style.display = 'none';
         search.style.display = 'none';
     } else {
         form.style.display = 'none';
         list.style.display = 'block';
         search.style.display = 'block';

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


