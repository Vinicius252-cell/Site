document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("welcomeMessage").style.display = "block";
    document.getElementById("preferencesSection").style.display = "none";
});

function showPreferences() {
    document.getElementById("welcomeMessage").style.display = "none";
    document.getElementById("preferencesSection").style.display = "block";
}

function toggleFoodOptions() {
    var activity = document.getElementById("activity").value;
    var foodContainer = document.getElementById("foodContainer");

    if (activity === "jantar") {
        foodContainer.style.display = "block";
    } else {
        foodContainer.style.display = "none";
        document.getElementById("locationContainer").style.display = "none";
        document.getElementById("location").innerHTML = "";
    }
}

function toggleLocationOptions() {
    var food = document.getElementById("food").value;
    var locationContainer = document.getElementById("locationContainer");
    var locationSelect = document.getElementById("location");

    var options = [];

    if (food === "italiana") {
        options = [
            { value: "barolo", text: "Barolo" },
            { value: "mondoItaly", text: "Mondo Italy" }
        ];
    } else if (food === "japonesa") {
        options = [
            { value: "takashi", text: "Takashi" },
            { value: "kampai", text: "Kampai" },
            { value: "satoshi", text: "Satoshi" }
        ];
    }

    if (options.length > 0) {
        locationContainer.style.display = "block";
        locationSelect.innerHTML = "";
        options.forEach(function(option) {
            var opt = document.createElement("option");
            opt.value = option.value;
            opt.text = option.text;
            locationSelect.add(opt);
        });
    } else {
        locationContainer.style.display = "none";
    }
}

function generateInvitation() {
    var activity = document.getElementById("activity").value;
    var datetime = new Date(document.getElementById("datetime").value);
    var food = document.getElementById("food") ? document.getElementById("food").value : '';
    var location = document.getElementById("location") ? document.getElementById("location").value : '';

    var formattedDate = `${datetime.getDate()}/${datetime.getMonth() + 1}/${datetime.getFullYear()}`;
    var dayOfWeek = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'][datetime.getDay()];

    var invitationText = "";

    switch (activity) {
        case "jantar":
            if (food) {
                if (food === "italiana") {
                    invitationText = `O que acha de ir ao ${location} na ${dayOfWeek} (${formattedDate})?`;
                } else if (food === "japonesa") {
                    invitationText = `O que acha de ir ao ${location} na ${dayOfWeek} (${formattedDate})?`;
                }
            }
            break;
        case "cafe":
            invitationText = `O que acha de ir ao Bendito Café na ${dayOfWeek} (${formattedDate})?`;
            break;
        case "boliche":
            invitationText = `O que acha de ir ao Jarrão na ${dayOfWeek} (${formattedDate})?`;
            break;
        default:
            invitationText = `Para a atividade de ${activity} marcada para ${dayOfWeek} (${formattedDate}).`;
    }

    document.getElementById("invitationText").innerText = invitationText;
    document.getElementById("invitation").style.display = "block";
    document.getElementById("surpriseOption").style.display = "block";
}

function showSurpriseOptions() {
    window.location.href = "surprise.html";
}

function selectSurprise(option) {
    var invitationText = "";

    if (option === 'tulipas') {
        invitationText = "Ótima escolha! Esse item representa convite para um jantar no Barolo, na sexta-feira à noite. Com base na escolha, pensei no seguinte programa: Entrada - bruschettas de tomate, Principal - Um Filé à JK e pra fechar, uma torta holandesa.";
    } else if (option === 'girassois') {
        invitationText = "Bora ir no Satoshi, sexta à noite para saborear os diferentes niguiris e quem sabe experimentar uma saquêrinha?";
    }

    document.getElementById("selectedOption").style.display = "none";
    document.getElementById("invitationDetails").style.display = "block";
    document.getElementById("invitationText").innerText = invitationText;
}