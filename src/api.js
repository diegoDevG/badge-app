const BASE_URL = 'https://platzi-badges.herokuapp.com';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
    delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
    await simulateNetworkLatency();

    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const api = {
    badges: {
        list() {
            return callApi('/api/v1');
        },
        create(badge) {
            return callApi(`/api/v1`, {
                method: 'POST',
                body: JSON.stringify(badge),
            });
        },
        read(badgeId) {
            return callApi(`/api/v1/${badgeId}`);
        },
        update(badgeId, updates) {
            return callApi(`/api/v1/${badgeId}`, {
                method: 'PUT',
                body: JSON.stringify(updates),
            });
        },
        // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
        remove(badgeId) {
            return callApi(`/api/v1/${badgeId}`, {
                method: 'DELETE',
            });
        },
    },
};

export default api;