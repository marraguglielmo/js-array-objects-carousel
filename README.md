# Carosello Array di Oggetti

Dato un array di oggetti letterali con:

- url dell’immagine
- titolo
- descrizione

Creare un carosello come nella foto allegata o come il vostro già realizzato.

### Svolgimento

1. prendo i bottoni e li metto in due variabili
2. prendo l `itemsWrapper` e la `thumbnail`
3. con un ciclo forEach inserisco le immagini nell `itemsWrapper` e nella `thumbnail`, passandogli le informazioni: url, title, description
4. raccolgo tutti gli elementi immagine e thumb
5. rendo attivo il primo elemento immagine e thumb
6. con due funzioni faccio in modo che al corrispettivo click, le immagini scorrano a destra e sinistra
7. rendo lo scorrimento infinito, sia da destra che da sinistra

## Bonus 2-3

Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

### Svolgimento

1. dichiaro due variabili `setNext` e `setPrev` a cui attribuirò il `setInterval`
2. al click del `btnScorrPrev` si attiverà:

- il `clearInterval` del setInterval che fa partire lo scorrimento in avanti
- il `setInterval` che fa partire lo scorrimento indietro
