let pilots = [
    {
        "name": "Sérgio Camara",
        "pictureURL": "https://cdn-1.motorsport.com/images/mgl/0rG3Mvy2/s200/sergio-sette-camara-ert-formul.webp",

    },
    {
        "name": "Sérgio Camara",
        "pictureURL": "https://cdn-1.motorsport.com/images/mgl/0rG3Mvy2/s200/sergio-sette-camara-ert-formul.webp",
    },
    {
        "name": "Sérgio Camara",
        "pictureURL": "https://cdn-1.motorsport.com/images/mgl/0rG3Mvy2/s200/sergio-sette-camara-ert-formul.webp",
    }
]

for (let i = 0; i<pilots.length; i++) {

    console.log(pilots);

    let item = document.createElement('div');
    item.classList.add("tabela-item");


    let pilot = document.createElement('div');
    pilot.classList.add("piloto");


    let pilot_pos = document.createElement("p");
    pilot_pos.innerHTML = i+1;
    pilot_pos.classList.add("posicao");

    let pilot_pic = document.createElement('img');
    pilot_pic.src = pilots[i].pictureURL;
    pilot_pic.classList.add("piloto-foto");

    let pilot_name = document.createElement('p');
    pilot_name.innerHTML = pilots[i].name;
    pilot_name.classList.add("piloto-nome");



    pilot.appendChild(pilot_pos);
    pilot.appendChild(pilot_pic);
    pilot.appendChild(pilot_name);

    item.appendChild(pilot);
    document.getElementById("ultima-corrida-tabela").appendChild(item);
}