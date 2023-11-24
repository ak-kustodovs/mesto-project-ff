function getCards() {
    return fetch('https://nomoreparties.co/v1/wff-cohort-1/cards', {
        headers: {
            authorization:'70406093-005e-40e7-aee9-7a5cf3c18ff0'
        }
    })
    .then(res=>res.json())
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
  .then(res => res.json())
  .then((data) => {
    console.log(data);
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
    .then(res => res.json());
}

export {getCards, getProfile, updateProfile, updateCards}