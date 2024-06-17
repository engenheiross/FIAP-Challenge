let pilots = [
    {
        "name": "Sérgio Camara",
        "team": "Dragon / Penske Autosport",
        "country": "Brazil",
        "pictureURL": "https://cdn-1.motorsport.com/images/mgl/0rG3Mvy2/s200/sergio-sette-camara-ert-formul.webp",
    },
    {
        "name": "Jean-Éric Vergne",
        "team": "DS Techeetah",
        "country": "France",
        "pictureURL": "https://cdn-4.motorsport.com/images/mgl/Y998rGXY/s200/jean-eric-vergne-ds-penske.webp",
    },
    {
        "name": "Stoffel Vandoorne",
        "team": "Mercedes-EQ Formula E Team",
        "country": "Belgium",
        "pictureURL": "https://cdn-4.motorsport.com/images/mgl/0rGbX5q2/s200/stoffel-vandoorne-ds-penske-1.webp",
    },
    {
        "name": "Mitch Evans",
        "team": "Jaguar Racing",
        "country": "New Zealand",
        "pictureURL": "https://cdn-6.motorsport.com/images/mgl/6zQeAklY/s200/mitch-evans-jaguar-racing.webp",
    },
    {
        "name": "Antonio Felix da Costa",
        "team": "DS Techeetah",
        "country": "Portugal",
        "pictureURL": "https://cdn-5.motorsport.com/images/mgl/YXRaQwR0/s200/antonio-felix-da-costa-porsche-1.webp",
    },
    {
        "name": "Lucas di Grassi",
        "team": "Audi Sport ABT Schaeffler",
        "country": "Brazil",
        "pictureURL": "https://cdn-8.motorsport.com/images/mgl/68yg5RX0/s200/lucas-di-grassi-abt-cupra-raci-1.webp",
    },
    {
        "name": "Robin Frijns",
        "team": "Envision Virgin Racing",
        "country": "Netherlands",
        "pictureURL": "https://cdn-5.motorsport.com/images/mgl/YW7oBmyY/s200/robin-frijns-envision-racing.webp",
    },
    {
        "name": "Nyck de Vries",
        "team": "Mercedes-EQ Formula E Team",
        "country": "Netherlands",
        "pictureURL": "https://cdn-3.motorsport.com/images/mgl/0a98x1w0/s200/nyck-de-vries-mahindra-racing.webp",
    },
    {
        "name": "Sam Bird",
        "team": "Jaguar Racing",
        "country": "United Kingdom",
        "pictureURL": "https://cdn-6.motorsport.com/images/mgl/6b7B13w0/s200/sam-bird-neom-mclaren-formula-.webp",
    },
    {
        "name": "Alexander Sims",
        "team": "Mahindra Racing",
        "country": "United Kingdom",
        "pictureURL": "https://cdn-8.motorsport.com/static/img/mgl/6100000/6100000/6109000/6109900/6109919/s200/dtm-jerez-november-testing-2015-alexander-sims.webp",
    },
    {
        "name": "Oliver Rowland",
        "team": "Nissan e.dams",
        "country": "United Kingdom",
        "pictureURL": "https://cdn-9.motorsport.com/images/mgl/YBenxJ82/s8/oliver-rowland-nissan-formula--1.jpg",
    },
    {
        "name": "Jake Dennis",
        "team": "BMW i Andretti Motorsport",
        "country": "United Kingdom",
        "pictureURL": "https://cdn-3.motorsport.com/images/mgl/6D1WvGJ0/s200/jake-dennis-andretti-global-1.webp",
    },
];

// Classificações da Última Corrida
for (let i = 0; i<8; i++) {

    console.log(pilots);

    let item = document.createElement('div');
    item.classList.add("tabela-item");


    let pilot = document.createElement('div');
    pilot.classList.add("piloto");


    let pos = document.createElement("p");
    pos.innerHTML = i+1;
    pos.classList.add("posicao");

    let pilot_pic = document.createElement('img');
    pilot_pic.src = pilots[i].pictureURL;
    pilot_pic.classList.add("piloto-foto");

    let pilot_name = document.createElement('p');
    pilot_name.innerHTML = pilots[i].name;
    pilot_name.classList.add("piloto-nome");

    if(i == 0) { // Award de Ganhador da Corrida
        document.getElementById("award-ganhador-corrida").getElementsByTagName("img")[0].src = pilots[i].pictureURL;
        document.getElementById("award-ganhador-corrida").getElementsByClassName("pilot-name")[0].innerHTML = pilots[i].name;
    } 


    item.appendChild(pos);
    pilot.appendChild(pilot_pic);
    pilot.appendChild(pilot_name);
    

    item.appendChild(pilot);
    document.getElementById("ultima-corrida-tabela").appendChild(item);
    
}

shuffle(pilots); //Embaralhando a lista de pilotos para ter uma ordem diferente na classificação da liga

// Classificações da Liga
for (let i = 0; i<pilots.length; i++) {

    console.log(pilots);

    let item = document.createElement('tr');
    item.classList.add("tabela-item");


    let pilot = document.createElement('th');
    pilot.classList.add("piloto");


    let pos = document.createElement("th");
    pos.innerHTML = i+1;
    pos.classList.add("posicao");

    let pilot_pic = document.createElement('img');
    pilot_pic.src = pilots[i].pictureURL;
    pilot_pic.classList.add("piloto-foto");

    let pilot_name = document.createElement('th');
    pilot_name.innerHTML = pilots[i].name;
    pilot_name.classList.add("piloto-nome");


    let team = document.createElement('th');
    team.innerHTML = pilots[i].team;
    team.classList.add("hide");
    team.classList.add("equipe");

    let score = document.createElement('th');
    score.innerHTML = Math.round(90 - i - (Math.random() * (1 - 0))); //subtraindo 0 ou 1 aleatoriamente
    score.classList.add("hide");
    score.classList.add("score");

    item.appendChild(pos);
    pilot.appendChild(pilot_pic);
    pilot.appendChild(pilot_name);
    

    item.appendChild(pilot);

    item.appendChild(team);
    item.appendChild(score);
    

    document.getElementById("classificacao").getElementsByTagName("tbody")[0].appendChild(item);
    
}

watchButton = document.getElementById("watch-button");
purchaseButton = document.getElementById("purchase-button");
watchButton.addEventListener("click", function() {
    window.open("https://youtu.be/R1fYQ7Vq3v4?si=e9v0xrEkCSw8L_CB");
})
purchaseButton.addEventListener("click", function() {
    window.open("https://www.fiaformulae.com/pt-br");
})


function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }