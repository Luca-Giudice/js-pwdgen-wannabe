// | Chiedere al'utente nome cognome colore preferito e generare una password con alla fine il numero 21



// 1. Prendo l'elemento DOM
// 2. Chiedo il nome all'utente
// 3. Chiedo il cognome all'utente
// 4. Chiedo il colore preferito all'utente
// 5. Calcolare il prodotto del nome più l cognome più il colore preferito aggiungendo 21
// 6. Inserire  il risultato nell'elemento DOM


// Prendo l'elemento DOM

const targetElement = document.getElementById('target');
console.log(targetElement);


// chiedo il nome all'utente

const userName = prompt('Nome');
console.log(userName);


// Chiedo il cognome all'utente

const userSurname = prompt('Cognome');
console.log(userSurname);

// Chiedo il colore preferito

const favoriteColor =prompt('colore preferito');
console.log(favoriteColor);

// Calcolo la password

const sum = userName + userSurname + favoriteColor + 21
console.log(sum);
console.log(typeof sum);

// inserirlo in pagina

targetElement.innerText = sum;
