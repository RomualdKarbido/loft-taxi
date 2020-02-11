const link = 'https://loft-taxi.glitch.me/';


export const requestsTaxi = (metod, adress, body) => {
    if (metod === 'POST') {
        const requests = () => fetch(`${link}/${adress}`, {
            method: metod, body: JSON.stringify(body), headers: {'content-type': 'application/json'}
        }).then(response => response.json());
        return requests
    } else if (metod === 'GET') {
        const requests = () => fetch(`${link}/${adress}`, {
            method: metod, headers: {'content-type': 'application/json'}
        }).then(response => response.json());
        return requests
    }
};

