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

function init() {}

init();
