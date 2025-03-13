// CRIANDO OS STATES ENGINE
const state = {
    score:{
        playerScore: 0,
        computerScore: 0,

        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-image"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions: {
        buttom: document.getElementById("next-duel"),
    },
};
//CRIANDO A ENUMERAÇÃO DAS CARTAS
const playerSides = {
    player1: "player-field-card",
    computer: "computer-field-card",
};

const pathImages = "./assets/icons/";

const cardData = [
    {
        id:0,
        name:"Blue Eyes White Dragon",
        type:"Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoserOf: [2],
    },

    {
        id:1,
        name:"Dark magician",
        type:"Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoserOf: [0],
    },
    {
        id:2,
        name:"Exodia",
        type:"Scissors",
        img: `${pathImages}exodia.png`,
        WinOf: [0],
        LoserOf: [1],
    },
]


//CRIANDO ASSINATURA DAS FUNÇÕES PRINCIPAIS

async function drawCards(cardNumbers, fieldSide) {
    for(let i = 0; 1 <cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

function init() {
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
}

init();
