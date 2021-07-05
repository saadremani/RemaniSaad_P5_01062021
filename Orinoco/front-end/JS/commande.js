function getCart() {

    const monPanier = localStorage.getItem("panier");
    return JSON.parse(monPanier);
  
  }
  
  
  // SUPPRIMER LA OU LES CAMERA(S) DU PANIER //
  
  function deleteCartItem(cartItems, index) {
  
        // SPLICE permet de supprimer n'importe quelle caméra dans le panier en prenant l'index de chaque caméra et "1" pour pouvoir les supprimer à l'unité présentes dans le panier //
        cartItems.splice(index, 1);
        localStorage.setItem("panier", JSON.stringify(cartItems));
        
  }
  
  
  // INSERET LA CAMERA DANS LE TABLEAU DU PANIER //
  
  function renderCartItem(cartItems, i) {
  
    const cartItem = cartItems[i];
  
      // INSERTION DU TABLEAU //
  
      let monTableau = document.getElementById("table");
      let ligne = monTableau.insertRow();
      tbody.appendChild(ligne);
  
  
      // AFFICHER LE NOM DE CHAQUE CAMERAS //
  
      let cell = ligne.insertCell(0);
      ligne.appendChild(cell);
      cell.textContent = cartItem.name;
  
  
      // CREATION DU BOUTTON "SUPPRIMER" //
  
      let cell1 = ligne.insertCell(1);
      ligne.appendChild(cell1);
      let boutton = document.createElement("button");
      boutton.setAttribute("id", cartItem.id);
  
      cell1.appendChild(boutton);
      boutton.textContent = "Supprimer";
  
  
      // PRIX //
  
      let cell2 = ligne.insertCell(2);
      ligne.appendChild(cell1);
      cell2.textContent = cartItem.price + " €";
  
  
      // BOUTTON ROUGE "SUPPRIMER", PERMET DE SUPPRIMER N'IMPORTE QUELLE CAMERA DU PANIER //
  
      boutton.addEventListener("click", function () {
        deleteCartItem(cartItems, i);
        window.location.reload();
      });
    
  }
  
  
  
  
  
  
  
  
  function renderTotal(cartItems) {
  
      // INDIQUER LE PRIX TOTAL DES COMMANDES //
  
      let prixTotal = 0;
  
  
      // UNE BOUCLE "FOR" POUR REPRENDRE TOUS LES PRIX DES CAMERAS PRESENTES DANS LE PANIER //
    
      for(let m = 0; m < cartItems.length; m++) {
        let prixProduit = cartItems[m].price;
        prixTotal += prixProduit;
      }
    
     // STOCKAGE DU PRIX TOTAL DANS LE LOCALSTORAGE ET L'AFFICHER AVEC LES `` EN UTILISANT LE HTML A L'INTERIEUR //
  
     localStorage.setItem("total", JSON.stringify(prixTotal));
     const affichage = `<th class= "prixTotal">${prixTotal} €</th>`;
     thead2.insertAdjacentHTML("beforeend", affichage);
  }
  
  
  const cartItems = getCart();
  
  for(let i = 0; i < cartItems.length; i++) {
    renderCartItem(cartItems, i);
  }
  
  
  renderTotal(cartItems);
  
  
  
  
  
  
  // FORMULAIRE //
  
  // CODE PERMETTANT DE REAGIR EN FONCTION DE CE QUE L'UTILISATEUR MET DANS LES CHAMPS DU FORMULAIRE EN METTANT DES CONDITIONS AVEC "IF" ET "ELSE" //
  
  
  
  function formIsValid() {
    
      (firstName = document.getElementById("firstname")),
      (lastName = document.getElementById("lastname")),
      (address = document.getElementById("address")),
      (email = document.getElementById("email")),
      (city = document.getElementById("city")),
      (message = document.getElementsByClassName("message")),
      (icon = document.querySelector("i"));
      (sucess = document.getElementsByClassName("sucess")),
      (error = document.getElementsByClassName("error"));
  
      let errors = 0;
  
    
    
    
    // VALIDATION POUR LE PRENOM //
  
    if (firstName.value == "") {
      firstName.style.borderColor = "red";
      message[0].style.visibility = "visible";
      message[0].style.color = "red";
      message[0].innerText = "Vous devez intégrer un prénom";
      error[0].style.visibility = "visible";
      error[0].style.color = "red";
      errors++;
    } else if (firstName.value.length < 3 && firstName.value.length > 0) {
      firstName.style.borderColor = "red";
      message[0].style.visibility = "visible";
      message[0].style.color = "red";
      message[0].innerText =
        "Vous devez rentrer au moins 3 lettres pour votre prénom";
      error[0].style.visibility = "visible";
      error[0].style.color = "red";
      errors++;
    } else if (firstName.value.length > 3 && isNaN(parseFloat(firstName.value))) {
      firstName.style.borderColor = "green";
      error[0].style.visibility = "hidden";
      message[0].style.visibility = "hidden";
      sucess[0].style.visibility = "visible";
      sucess[0].style.color = "green";
    } else {
      firstName.style.borderColor = "red";
      message[0].style.visibility = "visible";
      message[0].style.color = "red";
      message[0].innerText =
        "Vous devez rentrer votre prénom et pas des chiffres";
      error[0].style.visibility = "visible";
      error[0].style.color = "red";
      errors++;
    }
  
    
    
    
    // VALIDATION POUR LE NOM //
  
    if (lastName.value == "") {
      lastName.style.borderColor = "red";
      message[1].style.visibility = "visible";
      message[1].style.color = "red";
      message[1].innerText = "Vous devez intégrer un nom";
      error[1].style.visibility = "visible";
      error[1].style.color = "red";
      errors++;
    } else if (lastName.value.length < 3 && lastName.value.length > 0) {
      lastName.style.borderColor = "red";
      message[1].style.visibility = "visible";
      message[1].style.color = "red";
      message[1].innerText =
        "Vous devez rentrer au moins 3 lettres pour votre nom";
      error[1].style.visibility = "visible";
      error[1].style.color = "red";
      errors++;
    } else if (lastName.value.length > 3 && isNaN(parseFloat(lastName.value))) {
      lastName.style.borderColor = "green";
      error[1].style.visibility = "hidden";
      message[1].style.visibility = "hidden";
      sucess[1].style.visibility = "visible";
      sucess[1].style.color = "green";
    } else {
      lastName.style.borderColor = "red";
      message[1].style.visibility = "visible";
      message[1].style.color = "red";
      message[1].innerText = "Vous devez rentrer votre nom et pas des chiffres";
      error[1].style.visibility = "visible";
      error[1].style.color = "red";
      errors++;
    }
  
    
    
    
    // VALIDATION POUR L'ADRESSE POSTALE //
  
    if (address.value == "") {
      address.style.borderColor = "red";
      message[2].style.visibility = "visible";
      message[2].style.color = "red";
      message[2].innerText = "Vous devez intégrer une adresse postale";
      error[2].style.visibility = "visible";
      error[2].style.color = "red";
      errors++;
    } else if (address.value.length < 3 && address.value.length > 0) {
      address.style.borderColor = "red";
      message[2].style.visibility = "visible";
      message[2].style.color = "red";
      message[2].innerText =
        "Vous devez rentrer au moins 3 lettres pour votre nom";
      error[2].style.visibility = "visible";
      error[2].style.color = "red";
      errors++;
    } else {
      address.style.borderColor = "green";
      error[2].style.visibility = "hidden";
      message[2].style.visibility = "hidden";
      sucess[2].style.visibility = "visible";
      sucess[2].style.color = "green";
    }
  
    
    
    
    // VALIDATION POUR L'ADRESSE MAIL //
  
    if (email.value == "") {
      email.style.borderColor = "red";
      message[3].style.visibility = "visible";
      message[3].style.color = "red";
      message[3].innerText = "Vous devez intégrer une adresse mail";
      error[3].style.visibility = "visible";
      error[3].style.color = "red";
      errors++;
    } else if (
      email.value.indexOf("@") < 3 ||
      email.value.lastIndexOf(".") >= email.value.length - 2
    ) {
      email.style.borderColor = "red";
      message[3].style.visibility = "visible";
      message[3].style.color = "red";
      message[3].innerText = "Adresse mail non valide";
      error[3].style.visibility = "visible";
      error[3].style.color = "red";
      errors++;
    } else {
      email.style.borderColor = "green";
      error[3].style.visibility = "hidden";
      message[3].style.visibility = "hidden";
      sucess[3].style.visibility = "visible";
      sucess[3].style.color = "green";
    }
  
    
    
    
    // VALIDATION POUR LA VILLE //
  
    if (city.value == "") {
      city.style.borderColor = "red";
      message[4].style.visibility = "visible";
      message[4].style.color = "red";
      message[4].innerText = "Vous devez intégrer une ville";
      error[4].style.visibility = "visible";
      error[4].style.color = "red";
      errors++;
    } else if (city.value.length < 3 && city.value.length > 0) {
      city.style.borderColor = "red";
      message[4].style.visibility = "visible";
      message[4].style.color = "red";
      message[4].innerText =
        "Vous devez rentrer au moins 3 lettres pour le nom de votre ville";
      error[4].style.visibility = "visible";
      error[4].style.color = "red";
      errors++;
    } else if (city.value.length > 3 && isNaN(parseFloat(city.value))) {
      city.style.borderColor = "green";
      error[4].style.visibility = "hidden";
      message[4].style.visibility = "hidden";
      sucess[4].style.visibility = "visible";
      sucess[4].style.color = "green";
    } else {
      city.style.borderColor = "red";
      message[4].style.visibility = "visible";
      message[4].style.color = "red";
      message[4].innerText =
        "Vous devez rentrer le nom de votre ville et pas des chiffres";
      error[4].style.visibility = "visible";
      error[4].style.color = "red";
      errors++;
    }
  
    return errors === 0;
  }
  
  
  
  // ENVOIE DE LA COMMANDE - PANIER + FORMULAIRE DE CONTACT //
  
  
  function sendOrder(cartItems) {
  
      if (formIsValid()) {
        const contact = {
  
          firstName: document.getElementById("firstname").value,
          lastName: document.getElementById("lastname").value,
          address: document.getElementById("address").value,
          city: document.getElementById("city").value,
          email: document.getElementById("email").value,
          
        };
  
        localStorage.setItem("validation", JSON.stringify(contact));
  
  
  
  
        const products = [];
  
        for (let i = 0; i < cartItems.length; i++) {
          products.push(cartItems[i].id);
        }
  
  
  
        const command = {
          
          contact: contact,
          products: products,
  
        };
  
        order(command)
        .then(response => {
          const orderId = response.orderId;
          localStorage.removeItem("panier");
          localStorage.setItem("order", orderId);
          window.location.href = "validation.html";
        
  
  
      })
    } else {
  
      alert("Formulaire Invalide");
  
    }
  
  }
  
  
  
  
  // ENVOYER LE FORMULAIRE AU SERVEUR DE L'API //
  
  // METHODE POST //
  
  
  
  
    let myform = document.getElementById("myform");
  
    myform.addEventListener("submit", (e) => {
      e.preventDefault();
      
      sendOrder(cartItems);
      
    })
  
  