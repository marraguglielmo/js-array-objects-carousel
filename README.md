# Carosello Array di Oggetti

Dato un array di oggetti letterali con:

- url dell’immagine
- titolo
- descrizione

Creare un carosello come nella foto allegata o come il vostro già realizzato.

## Svolgimento

1. prendo i bottoni e li metto in due variabili
2. prendo l `itemsWrapper` e la `thumbnail`
3. con un ciclo forEach inserisco le immagini nell `itemsWrapper` e nella `thumbnail`, passandogli le informazioni: url, title, description
4. con due funzioni faccio in modo che al corrispettivo click, le immagini scorrano a destra e sinistra
5. rendo lo scorrimento infinito, sia da destra che da sinistra
