let url = "https://finalspaceapi.com/api/v0/character"

async function getData() {
  try {
    const result = fetch(url)
    const data = await (await result).json()
    console.log(data)
    data.forEach(element => {
      const character = document.getElementsByClassName('card-deck')
      character[0].innerHTML += `<div class="card mb-5" style="min-width: 15rem;">
        <img src="${element.img_url}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">Origin: ${element.origin} <br> Species: ${element.species}</p>
          <p class="card-text"><small class="text-dark">Abilities: ${element.abilities.toString()}</small></p>
        </div>
      </div>`
    });
  }
  catch (err) {
    console.log(err)
  }
}
