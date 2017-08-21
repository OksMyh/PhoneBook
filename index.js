let friends = [
     {
        firstName: 'Ivan ',
        lastName: 'Gates ',
        number: '(093) 555-5555 ',
        email: 'Ivan@gmail.com '
    },
    {
        firstName: 'Andrew ',
        lastName: 'Sveichek ',
        number: '(093) 444-4444 ',
        email: 'Andrew@gmail.com '
    },
    {
        firstName: 'David ',
        lastName: 'Chouk ',
        number: '(093) 333-3333 ',
        email: 'David@gmail.com '
    }
];

 function showListContacts() {
     let listContainer = document.getElementById('contacts');
     for (let i = 0; i < friends.length; i++){
         let contact = document.createElement('div');
         let userInfo = document.createTextNode(friends[i].firstName +
             friends[i].lastName + friends[i].number + friends[i].email);
         contact.appendChild(userInfo);
         listContainer.appendChild(contact);
     }
 }
showListContacts();

function addContact() {
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
}

function addPhone() {
    let phone = document.getElementById('phone');
    phone.style.display = 'block';
}