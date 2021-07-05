const url = 'http://localhost:3000';


function getCameras() {

    return fetch(url +'/api/cameras/')
        .then(res => res.json());

}

function getCamera(id) {

    return fetch(url +'/api/cameras/' + id)
        .then(res => res.json());

}


function order(command) {
    return fetch(url + '/api/cameras/order', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(command),
    }).then(res => res.json());

    
}
