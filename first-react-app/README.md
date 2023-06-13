# Esercizio

Creare un'applicazione React tramite Vite, che dato l'array di oggetti presente sotto, renderizzi una lista di todo-items. Utilizzare i componenti e le props.
L'obiettivo di questa esercitazione è cominciare a prendere confidenza con le regole React, non dovete raggiungere necessariamente l'obiettivo, quindi andate con tutta tranquillità per il momento.

> Vi ricordo che per far partire una applicazione scaricata (la lezione del giorno per esempio), dovete dare il comando `npm install` alla cartella della repo, prima di avviare l'ambiente di sviluppo tramite il comando `npm run dev`.

> Inoltre, da adesso, fino a quando non verrà specificato diversamente, dovrete creare ogni progetto col nome della data odierna. Quindi la vostra esercitazione di oggi sarà chiamata `13-06-2023` e tale nome dovrà corrispondere al nome della repository che creerete su Github. Ogni giorno avrete quindi una nuova repo per ogni singolo progetto (tranquilli, in futuro potete cancellarle le repos, o inglobarle sotto un'unica cartella, ma per il momento agite in questo modo). Alla fine dell'esercitazione, alle 18:00, condividete il link della repo a @Giuseppe Senettone.

#### Benvenuti in React!

```
const todoList = [
    {
        "id": 1,
        "todo": "Do something nice for someone I care about",
        "completed": true,
        "userId": 26
    },
    {
        "id": 2,
        "todo": "Memorize the fifty states and their capitals",
        "completed": false,
        "userId": 48
    },
    {
        "id": 3,
        "todo": "Watch a classic movie",
        "completed": false,
        "userId": 4
    },
    {
        "id": 4,
        "todo": "Contribute code or a monetary donation to an open-source software project",
        "completed": false,
        "userId": 48
    },
    {
        "id": 5,
        "todo": "Solve a Rubik's cube",
        "completed": false,
        "userId": 31
    },
    {
        "id": 6,
        "todo": "Bake pastries for me and neighbor",
        "completed": false,
        "userId": 39
    },
    {
        "id": 7,
        "todo": "Go see a Broadway production",
        "completed": false,
        "userId": 32
    },
    {
        "id": 8,
        "todo": "Write a thank you letter to an influential person in my life",
        "completed": true,
        "userId": 13
    },
    {
        "id": 9,
        "todo": "Invite some friends over for a game night",
        "completed": false,
        "userId": 47
    },
    {
        "id": 10,
        "todo": "Have a football scrimmage with some friends",
        "completed": false,
        "userId": 19
    },
    {
        "id": 11,
        "todo": "Text a friend I haven't talked to in a long time",
        "completed": false,
        "userId": 39
    },
    {
        "id": 12,
        "todo": "Organize pantry",
        "completed": true,
        "userId": 39
    },
    {
        "id": 13,
        "todo": "Buy a new house decoration",
        "completed": false,
        "userId": 16
    },
    {
        "id": 14,
        "todo": "Plan a vacation I've always wanted to take",
        "completed": false,
        "userId": 28
    },
    {
        "id": 15,
        "todo": "Clean out car",
        "completed": false,
        "userId": 33
    },
    {
        "id": 16,
        "todo": "Draw and color a Mandala",
        "completed": true,
        "userId": 24
    },
    {
        "id": 17,
        "todo": "Create a cookbook with favorite recipes",
        "completed": false,
        "userId": 1
    },
    {
        "id": 18,
        "todo": "Bake a pie with some friends",
        "completed": false,
        "userId": 1
    },
    {
        "id": 19,
        "todo": "Create a compost pile",
        "completed": true,
        "userId": 5
    },
    {
        "id": 20,
        "todo": "Take a hike at a local park",
        "completed": true,
        "userId": 43
    },
    {
        "id": 21,
        "todo": "Take a class at local community center that interests you",
        "completed": false,
        "userId": 22
    },
    {
        "id": 22,
        "todo": "Research a topic interested in",
        "completed": false,
        "userId": 4
    },
    {
        "id": 23,
        "todo": "Plan a trip to another country",
        "completed": true,
        "userId": 37
    },
    {
        "id": 24,
        "todo": "Improve touch typing",
        "completed": false,
        "userId": 45
    },
    {
        "id": 25,
        "todo": "Learn Express.js",
        "completed": false,
        "userId": 49
    },
    {
        "id": 26,
        "todo": "Learn calligraphy",
        "completed": false,
        "userId": 50
    },
    {
        "id": 27,
        "todo": "Have a photo session with some friends",
        "completed": false,
        "userId": 14
    },
    {
        "id": 28,
        "todo": "Go to the gym",
        "completed": false,
        "userId": 15
    },
    {
        "id": 29,
        "todo": "Make own LEGO creation",
        "completed": false,
        "userId": 30
    },
    {
        "id": 30,
        "todo": "Take cat on a walk",
        "completed": false,
        "userId": 15
    }
]
