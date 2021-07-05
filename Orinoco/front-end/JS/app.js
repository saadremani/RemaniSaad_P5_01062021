// AFFICHAGE DES CAMERAS //

function renderCameras(data) {

    for(let i = 0; i < data.length; i++) {

        let main = document.querySelector('#main');

        let camera = document.createElement('div');
        camera.setAttribute("class", 'photo');
        main.appendChild(camera);

        let image = document.createElement('img');
        image.setAttribute("class", 'image');
        image.src = data[i].imageUrl;
        camera.appendChild(image);

        let nom = document.createElement('p');
        nom.setAttribute("class", 'nom');
        nom.textContent = data[i].name;
        camera.appendChild(nom);

        let prix = document.createElement('p');
        prix.setAttribute("class", 'prix');
        prix.textContent = data[i].price / 100 + ' €';
        camera.appendChild(prix);

        let produit = document.createElement('button');
        produit.setAttribute("class", 'btn-produit');
        produit.textContent = `Voir le Produit`;
        camera.appendChild(produit); 






// ECOUTE DE L'EVENEMENT AU CLIC //



        produit.addEventListener('click', (e) => {
            e.preventDefault()
            window.location = 'camera.html?id=' + data[i]._id;

        });
    }
}



getCameras()
.then(renderCameras);
