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
        type: document.getElementById("card-type"),
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
    player1: "player-cards",
    computer: "computer-cards",
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

//IMPLEMENTANDO A LÓGICA DE SETAR CARTAS EM CAMPO
async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(IdCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if(fieldSide === playerSides.player1) {
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }

    cardImage.addEventListener("mouseover", () => {
        drawSelectCard(IdCard);
    });

    return cardImage;

}

//IMPLEMENTANDO MOUSEOVER
async function drawSelectCard(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attribute: " + cardData[index].type;
}

//CRIANDO ASSINATURA DAS FUNÇÕES PRINCIPAIS

async function drawCards(cardNumbers, fieldSide) {
    for(let i = 0; i <cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    };
}

function init() {
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
}

init();
