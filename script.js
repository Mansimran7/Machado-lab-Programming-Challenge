var bearer_token;
console.log("Making an Authentication request to get JWT Token")
const postRequest = {
  url: 'http://localhost:8080/authenticate',
  method: 'POST',
  header: {
    'Content-Type': 'application/json',
  },
  body: {
        mode: 'raw',
        raw: JSON.stringify({
        "username": "foo",
        "password": "foo"
        })
    }
};

pm.sendRequest(postRequest, (error, response) => {
    console.log(error ? error : response.json());
    bearer_token = response.json().jwt

    pm.sendRequest({
        url: 'http://localhost:8080/populations',
        header: {
            'Content-Type': 'application/xml',
            'Authorization': 'Bearer ' + bearer_token
        },
        },
        (error, response) => {
        if (error) {
            console.log(error);
        } 
        else {
        console.log(response);
        }
    });

    pm.sendRequest({
        url: 'http://localhost:8080/movements',
        header: {
            'Content-Type': 'application/xml',
            'Authorization': 'Bearer ' + bearer_token
            },
        },
        (error, response) => {
        if (error) {
            console.log(error);
        } 
        else {
        console.log(response);
        }
    });

    pm.sendRequest({
        url: 'http://localhost:8080/farms',
        header: {
            'Content-Type': 'application/xml',
            'Authorization': 'Bearer ' + bearer_token
            },
        },
        (error, response) => {
        if (error) {
            console.log(error);
        } 
        else {
        console.log(response);
        }
    });

    const postRequest1 = {
    url: 'http://localhost:8080/movements',
    method: 'POST',
    header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + bearer_token
    },
    body: {
        mode: 'raw',
        raw: JSON.stringify({
            "account_company": "Mypigcompany",
            "new_movement_reason": "SOW TO FINISH",
            "new_species": "Swine",
            "new_origin_premid": "730AOYL",
            "new_destination_premid": "088WKFT",
            "new_num_of_item_moved": 20,
            "new_shipment_start_date": "2011-04-18T04:00:00.000+00:00",
            "id": 14,
        })
    }
    };
    pm.sendRequest(postRequest1, (error, response) => {
    console.log(error ? error : response.json());
});

});
