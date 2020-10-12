var nome_utente = prompt('Dimmi il tuo nome');
console.log("nome inserito dall'utente: " + nome_utente);

var cognome_utente = prompt('Dimmi il tuo cognome');
console.log("nome inserito dall'utente: " + cognome_utente);

var colore_utente = prompt('Dimmi il tuo colore preferito');
console.log("colore preferito inserito dall'utente: " + colore_utente);

var password = nome_utente + cognome_utente + colore_utente + 20;

document.getElementById('password').innerHTML = password;
