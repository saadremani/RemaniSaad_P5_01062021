const order = getOrder();

// RECUPERATION DE LA COMMANDE AFIN DE L'AFFICHER SUR LA PAGE DE VALIDATION //

function getOrder() {

    // RECUPERATION DES DONNEES DU FORMULAIRE DE CONTACT //

    let contact = localStorage.getItem("validation");
    let total = localStorage.getItem("total");


    // RECUPERATION DE L'ID DE LA COMMANDE DEPUIS LE LOCALSTORAGE //

   

    // RECUPERATION DU PRIX TOTALE DE LA COMMANDE DEPUIS LE LOCALSTORAGE //


    return {

        id: localStorage.getItem("order"),
        contact: JSON.parse(contact),
        total: JSON.parse(total)
    }

}



// AFFICHAGE DE LA COMMANDE DE L'UTILISATEUR //

function creatDiv(order) {

    // CREATION DE LA DIV //
    
    let div = document.createElement('div');
    div.id = "div1";
    let container = document.getElementById("container");
    container.insertAdjacentElement("beforebegin", div);

    


    // RECAPITULATIF DE LA COMMANDE //

    let p = document.createElement("p");
    p.textContent = "Votre récapitulatif de votre commande"
    div.appendChild(p);
    
    let pcontact = document.createElement("p");
    let infoContact = `${order.contact.firstName} ${order.contact.lastName} <br> ${order.contact.address} <br> ${order.contact.city} <br> ${order.contact.email}`
    div.appendChild(pcontact);
    
    pcontact.innerHTML = infoContact
    pcontact.style.textAlign = "center";

    

    // ID DE LA COMMANDE //

    let paragraphe = document.createElement("p");
    paragraphe.textContent = "Numéro de votre commande"

    let validationCommande = document.createElement("p")
    validationCommande.textContent = order.id;
    
    let validation = document.getElementById("div1");
    validation.appendChild(paragraphe);
    validation.appendChild(validationCommande);

    


    // LE MONTANT TOTAL //

    let montant = document.createElement("p");
    montant.textContent = "Montant total de votre commande"

    let validationTotal = document.createElement("p")
    validationTotal.textContent = "Total : " + order.total +  " €";
    validation.appendChild(montant);
    validation.appendChild(validationTotal);
      
    
}
    

creatDiv(order);  

 