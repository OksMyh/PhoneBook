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

function editContact(friendPosition) {
    let friends = JSON.parse(localStorage.getItem('friendsList')) || [];
    console.log('>>>>CONTACT IS EDITED');
    addContact(friends[friendPosition]);
}

function showListContacts() {
    let listContainer = document.getElementById('contacts');
    listContainer.innerHTML = '';

    let friends = JSON.parse(localStorage.getItem('friendsList')) || [];

    for (let i = 0; i < friends.length; i++) {
        let contact = document.createElement('div');

        contact.setAttribute('id', friends[i].id);
        contact.innerHTML =
            '<div class="name" onclick="showInformationAboutContact(' + i + ')">' + friends[i].firstName +
            '&nbsp;' + friends[i].lastName + '</div>' +
            '<div class="additional_info" style="display: none"><div class="email">' +
            friends[i].email + '</div>' + '<div class="number">' +
            friends[i].number + '</div></div>' +
            '<button onclick="editContact(' + i + ')" >Edit</button>';// +
            //'<div class="number" style="display: none">' + friends[i].number + '</div>';

        listContainer.appendChild(contact);

        //contact.addEventListener('click', editContact);
    }


}

showListContacts();


function showInformationAboutContact(itemPosition) {
    let additionalInfoBlock = document.getElementsByClassName('additional_info')[itemPosition];
    if (additionalInfoBlock.style.display === 'none'){
        additionalInfoBlock.style.display = 'block';
    } else {
        additionalInfoBlock.style.display = 'none';
    }
}


function addContact(contact) {
     toggleListOrForm();

     if (contact) {
         document.getElementById('firstname').value = contact.firstName;
         document.getElementById('lastname').value = contact.lastName;
         document.getElementById('email').value = contact.email;
         document.getElementById('number').value = contact.number;
         document.getElementById('item_id').value = contact.id;
     }
}

function toggleListOrForm() {
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
        add.innerHTML = 'cansel';
        clearFormInputs();
    } else {
        form.style.display = 'none';
        list.style.display = 'block';
        search.style.display = 'block';
        save.style.display = 'none';
        add.innerHTML = 'add contact';
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
    let userId = document.getElementById('item_id').value || Math.random();
    userId += '';
    console.log(userId);
    let user = {
        firstName: userName,
        lastName: userSurname,
        number: userNumber,
        email: userEmail,
        id: userId
    };

    if (!isUserDefined(user)) {
        addUserToLocalStorage(user);
    } else {
        editAllOccuredUser(user);
    }

    console.log(user);
    toggleListOrForm();
    showListContacts();
}

function clearFormInputs() {
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('item_id').value = '';
}

function isUserDefined(user) {
    let friends = JSON.parse(localStorage.getItem('friendsList')) || [];
    let isExists = friends.some(function (item) {
        return item.id === user.id;
    });
    return isExists;
}

function addUserToLocalStorage(friend) {
    let friends = JSON.parse(localStorage.getItem('friendsList')) || [];
    friends.push(friend);
    localStorage.setItem('friendsList', JSON.stringify(friends));
}

function editAllOccuredUser(friend) {
    let friends = JSON.parse(localStorage.getItem('friendsList')) || [];
    friends.forEach(function (item) {
        if(item.id === friend.id) {
            item.lastName = friend.lastName;
            item.number = friend.number;
            item.email = friend.email;
        }
    });
    localStorage.setItem('friendsList', JSON.stringify(friends));
}


