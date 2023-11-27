const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-1',
  headers: {
    authorization: '70406093-005e-40e7-aee9-7a5cf3c18ff0',
    'Content-Type': 'application/json'
  }
}

function getCards() {
    return fetch(config.baseUrl +'/cards', {
        headers: config.headers
    })
    .then(handleResponse);
}

function getProfile() {
    return fetch(config.baseUrl + '/users/me', {
    headers: config.headers
    })
  .then(handleResponse);
}

function updateProfile(name, description) {
    return fetch(config.baseUrl +'/users/me', {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: description
        })
    })
    .then(handleResponse)
}

function updateCards(name, link) {
    return fetch(config.baseUrl + '/cards', {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(handleResponse)
}

function deleteCard(id) {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',  
        headers: config.headers,
      })
      .then(handleResponse)
}

function likeCard(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',  
    headers: config.headers,
  })
  .then(handleResponse)
}

function unlikeCard(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',  
    headers: config.baseUrl,
  })
  .then(handleResponse)
}

function updateAvatar(link) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',  
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
  .then(handleResponse)
}

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export {getCards, getProfile, updateProfile, updateCards, deleteCard, likeCard, unlikeCard, updateAvatar}