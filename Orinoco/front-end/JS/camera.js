function getCameraId() {

    const urlCamera = new URLSearchParams(window.location.search);
    return urlCamera.get("id");

}



// CREATION DU FETCH POUR RECUPERER L'ID DE LA CAMERA UNIQUE //


function renderCamera(myCamera) {

    let section = document.querySelector('.camera');


    let camera = document.createElement('div');
    camera.setAttribute("class", 'picture');
    section.appendChild(camera);

    let image = document.createElement('img');
    image.setAttribute("class", 'image2');
    image.src = myCamera.imageUrl;
    camera.appendChild(image);

    let nom = document.createElement('p');
    nom.setAttribute("class", 'name2');
    nom.textContent = myCamera.name;
    camera.appendChild(nom);

    let prix = document.createElement('p');
    prix.setAttribute("class", 'price2');
    prix.textContent = myCamera.price / 100 + ' €';
    camera.appendChild(prix);

    let description = document.createElement('p');
    description.setAttribute("class", 'description');
    description.textContent = myCamera.description;
    camera.appendChild(description);
    

    let lentille = document.createElement('select');
    lentille.setAttribute("id", 'liste');
    camera.appendChild(lentille);
    let myLenses = myCamera.lenses;


    for(let i = 0; i < myLenses.length; i++) {


        let el = document.createElement("option");
        el.textContent = myLenses[i];
        liste.appendChild(el);

    }


    let bouton = document.createElement('button');
    bouton.setAttribute("class", 'btn-produit2');
    bouton.textContent = `Ajouter au Panier`;
    camera.appendChild(bouton);


    bouton.addEventListener('click', (e) => {

        e.preventDefault();
        addCameraToCart(myCamera);
        alert("Votre produit a été ajoutée au panier");
        window.location.href = 'panier.html';
    
    });
    

}



// ENVOYE TOUTES LES INFORMATIONS DE LA CAMERA DANS LE LOCALSTORAGE AVEC "getItems" //

function addCameraToCart(camera) {

    const produit = {

        id: camera._id,
        name: camera.name,
        price: camera.price / 100,
        image: camera.imageUrl,
    };


    let products = JSON.parse(localStorage.getItem("panier"))
    
    if(!products) {
  
        products = []
        
    }

    products.push(produit);

    localStorage.setItem("panier", JSON.stringify(products));


}

getCamera(getCameraId())
.then(renderCamera);

