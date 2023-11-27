function getCards() {
    return fetch('https://nomoreparties.co/v1/wff-cohort-1/cards', {
        headers: {
            authorization:'70406093-005e-40e7-aee9-7a5cf3c18ff0'
        }
    })
    .then(res=>{
      if (res.ok)
        return res.json()
      return Promise.reject(res.status);
      })
    .then((data) => data)
    .catch((error)=> {
        console.log(error)
    });
}

function getProfile(name, description, avatar) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-1/users/me', {
    headers: {
      authorization: '70406093-005e-40e7-aee9-7a5cf3c18ff0'
    }
  })
  .then(res=>{
    if (res.ok)
      return res.json()
    return Promise.reject(res.status);
    })
  .then((data) => {
    name.textContent = data.name;
    description.textContent = data.about;
    avatar.style.backgroundImage = `url('${data.avatar}')`;
  })
  .catch((error) => {
    console.log(error);
  })
}

function updateProfile(name, description) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-1/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '70406093-005e-40e7-aee9-7a5cf3c18ff0',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            about: description
        })
    })
    .then(res=>{
      if (res.ok)
        return res.json()
      return Promise.reject(res.status);
      })
    .catch((error) =>{
        console.log(error)
    })
}

function updateCards(name, link) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-1/cards', {
        method: 'POST',
        headers: {
            authorization: '70406093-005e-40e7-aee9-7a5cf3c18ff0', 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(res=>{
      if (res.ok)
        return res.json()
      return Promise.reject(res.status);
      })
    .catch((error) => {
        console.log(error);
    })
}

function deleteCard(id) {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-1/cards/${id}`, {
        method: 'DELETE',  
        headers: {
          authorization: '70406093-005e-40e7-aee9-7a5cf3c18ff0',
          'Content-Type': 'application/json'
        },
      })
      .then(res=>{
        if (res.ok)
          return res.json()
        return Promise.reject(res.status);
        })
      .catch((error) => {
        console.log(error);
      })
}

function likeCard(id) {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-1/cards/likes/${id}`, {
    method: 'PUT',  
    headers: {
      authorization: '70406093-005e-40e7-aee9-7a5cf3c18ff0',
      'Content-Type': 'application/json'
    },
  })
  .catch((error) => {
    console.log(error);
  })
}

function unlikeCard(id) {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-1/cards/likes/${id}`, {
    method: 'DELETE',  
    headers: {
      authorization: '70406093-005e-40e7-aee9-7a5cf3c18ff0',
      'Content-Type': 'application/json'
    },
  })
  .catch((error) => {
    console.log(error);
  })
}

function updateAvatar(link) {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-1/users/me/avatar`, {
    method: 'PATCH',  
    headers: {
      authorization: '70406093-005e-40e7-aee9-7a5cf3c18ff0',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: link
    })
  })
  .then(res=>{
    if (res.ok)
      return res.json()
    return Promise.reject(res.status);
    })
    .catch((error) => {
      console.log(error);
    })
}

export {getCards, getProfile, updateProfile, updateCards, deleteCard, likeCard, unlikeCard, updateAvatar}