//Haz el juego del Pasapalabra. El programa deberá lanzar la definición de una palabra y el usuario deberá adivinar 
//qué palabra estamos tratando, por ejemplo: '>>>'With the letter "M", Capital of Spain, located in the center of 
//the country. '>>>' "Madrid" '>>>'Correct, you have 1 Point!

//Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas 
//las letras, deberá indicarle al usuario cuantas letras ha fallado y cuántas ha acertado. Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. El juego deberá, cuando finalice, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.

//● El programa no debería hacer distinciones entre mayúsculas, minúsculas... Ejemplo: "animal" === "ANIMAL" // 
//"Animal" // "aNiMal"...

//● El programa debe estar preparado para aceptar el input "END" para terminar el juego en cualquier momento, si 
//esto sucede, el programa dirá cuántas letras ha acertado pero no entrará en el ranking.

//● Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma letra, se podrían
// hacer tres preguntas diferentes.

//● Tener en cuenta que al hacer pasapalabra en una pregunta, si usais distintas preguntas para una misma letra, 
//al dar la vuelta al rosco la pregunta deberia ser la misma.

//● Si el usuario falla la pregunta debeis mostrar la respuesta, ya sea en consola, en prompt o alert.

//Variables 
const questionStore = [
    { letter: "a", answer: ["abducir","abducir1","abducir2"], status: 0, question:["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien","CON LA A1.","CON LA A2"]},
    { letter: "b", answer: ["bingo","bingo1","bingo2"],status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso","CON LA B1.","CON LA B2."]},
    { letter: "c", answer: ["churumbel","churumbel1","churumbel2"], status: 0, question: ["CON LA C. Niño, crío, bebé","CON LA C1.","CON LA C2."]},
    { letter: "d", answer: ["diarrea","diarrea1","diarrea2"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida","CON LA D1.","CON LA D2."]},
    { letter: "e", answer: ["ectoplasma","ectoplasma1","ectoplasma2"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación","CON LA E1.","CON LA E2."]},
    { letter: "f", answer: ["facil","facil1","facil2"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad","CON LA F1.","CON LA F2."]},
    { letter: "g", answer: ["galaxia","galaxia1","galaxia2"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas","CON LA G1.","CON LA G2."]},
    { letter: "h", answer: ["harakiri","harakiri1","harakiri2"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento","CON LA H1.","CON LA H2."]},
    { letter: "i", answer: ["iglesia","iglesia1","iglesia2"], status: 0, question: ["CON LA I. Templo cristiano","CON LA I1.","CON LA I2"]},
    { letter: "j", answer: ["jabali","jabali1","jabali2"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba","CON LA J1.","CON LA J2."]},
    { letter: "k", answer: ["kamikaze","kamikaze1","kamikaze2"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria","CON LA K1.","CON LA K2."]},
    { letter: "l", answer: ["licantropo","licantropo1","licantropo2"], status: 0, question: ["CON LA L. Hombre lobo","CON LA L1.","CON LA L2."]},
    { letter: "m", answer: ["misantropo","misantropo1","misantropo2"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas","CON LA M1.","CON LA M2."]},
    { letter: "n", answer: ["necedad","necedad1","necedad2"], status: 0, question: ["CON LA N. Demostración de poca inteligencia","CON LA N1.","CON LA N2."]},
    { letter: "ñ", answer: ["señal","señal1","señal2"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.","CONTIENE LA Ñ1.","CONTIENE LA Ñ2,"]},
    { letter: "o", answer: ["orco","orco1","orco2"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien","CON LA O1.","CON LA O2."]},
    { letter: "p", answer: ["protoss","protoss1","protoss2"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft","CON LA P1.","CON LA P2."]},
    { letter: "q", answer: ["queso","queso1","queso2"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche","CON LA Q1.","CON LA Q2."]},
    { letter: "r", answer: ["raton","raton1","raton2"], status: 0, question: ["CON LA R. Roedor","CON LA R1.","CON LA R2."]},
    { letter: "s", answer: ["stackoverflow","stackoverflow1","stackoverflow2"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático","CON LA S1.","CON LA S2."]},
    { letter: "t", answer: ["terminator","terminator1","terminator2"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984","CON LA T1.","CON LA T2."]},
    { letter: "u", answer: ["unamuno","unamuno1","unamuno2"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914","CON LA U1.","CON LA U2."]},
    { letter: "v", answer: ["vikingos","vikingos1","vikingos2"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa","CON LA V1.","CON LA V2."]},
    { letter: "w", answer: ["sandwich","sandwich1","sandwich2"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso","CON LA W1.","CON LA W2."]},
    { letter: "x", answer: ["botox","botox1","botox2"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética","CON LA X1.","CON LA X2."]},
    { letter: "y", answer: ["peyote","peyote1","peyote2"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos","CON LA Y1.","CON LA Y2."]},
    { letter: "z", answer: ["zen","zen1","zen2"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional","CON LA Z1.","CON LA Z2."]},
];
const gameQuestions = [];//Array donde se almacenaran las preguntas del juego.
let query = {}; //Objeto en el que se almacenará la información de la pregunta a realizar.
let option; //Variable que almacenara el numero aleatorio generado para escoger entre las 3 opciones de pregunta de cada letra.
let user = { Player: '', Points: 0 };
let askUser;//Variable para relizar la pregunta al usuario
let correctAnswers = 0;
let wrongAnswers = 0;
let gameOver;

const rank = [
    { Player: 'Mireia', Points: 73 },
    { Player: 'Carlos', Points: 69 },
    { Player: 'Raul', Points: 68 }
];

    //**Funciones utiles**//

//Funcion para poner la primera letra en mayuscula.
const capitalize = (n) => {
    return n.charAt(0).toUpperCase() + n.slice(1);
};
//Funcion para obtener numeros aleatorios comprendidos entre dos valores (ambos incluidos).
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Funcion para mostrar el ranking de los mejores jugadores ordenadamente.
function ranking() {
    rank = rank.sort((a, b) => (b.Points) - (a.Points));
    console.log('RANKING:');
    console.table(rank);
}

    //**Funciones Principales del Programa**//

//Funcion para dar la bienvenida al usuario.
function welcome(){
    user.Player = capitalize(prompt('Buenos dias, ¿Cual es su nombre?').toLowerCase());
    alert(`${user.Player}, bienvenido/a al PasaPalabra de Skylab. A continuación te mostraremos las reglas,el ranking actual y empezaremos con la primera ronda del Pasapalabra.`);
    alert('Las reglas del Pasapalabra son muy sencillas, cada palabra acertada es 1 punto,y para llevarte el bote,¡tienes que completar el rosco completo!.')
    
}
//Función para seleccionar las preguntas que se haran por cada letra.
function questionsSelect() { 
    for (let i = 0; i<questionStore.length; i++) {
        query = {};
        option = getRandomIntInclusive(0,2)
        query.letter = questionStore[i].letter; 
        query.question = questionStore[i].question[option];
        query.answer = questionStore[i].answer[option];
        query.status = 0;
        gameQuestions.push(query);
    }
}
//Función para realizar las preguntas.
function askQuestions(){
    for(let i = 0; i<gameQuestions.length; i++){
        if(gameQuestions[i].status === 0){
            askUser = prompt(`${gameQuestions[i].question}`);
            switch(askUser.toLowerCase()){
                case gameQuestions[i].question:
                    gameQuestions[i].status = true;
                    correctAnswers ++;
                    alert(`¡La respuesta es Cooooorrecta!!`);
                    break;       
                case 'pasapalabra':
                    break;
                case 'end':
                    gameOver = true;
                    break;
                default:
                    gameQuestions[i].status = false;
                    wrongAnswers ++;
                    alert(`Noo..Lo sentimos, la respuesta correcta es: ${gameQuestions[i].answer}`);
            };     
        };
    };
};
 //Funcion loop para ir realizando las preguntas ordenadamente 
 function loopQuestions(){
    do {
        askQuestion();
    }while (gameQuestions.some(gameQuestion => gameQuestion.status === 0) && !gameOver);
};
    

//Funcion general la cual reune la llamada de todas las funciones principales anteriormente definidas.  
function pasaPalabraGame(){
    welcome();
    questionsSelect();
    loopQuestions();
}
//Llamada de la función general para inciar el juego
pasaPalabraGame();