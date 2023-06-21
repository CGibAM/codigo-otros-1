const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se modifica name y blog para que sean clases, se añade la clase location al html
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//Marcamos la función displayUser como async para permitir usar el await en el fetch, esto pausa la funcion asincrona hasta que se complete el request
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //Se crea la variable data para transformar el response body en un json y posteriormente poder utilizar la informacion de este
  const data = await response.json();
  console.log(data);
  // Se añaden plantillas literales para que funcione correctamente su llamado
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Se corrige nombre de la variable n por $n
  $n.textContent = `Algo salió mal: ${err}`
}

//Se modifica el catch para que el error que se muestre sea pasado como parametro a la función de handleError y pueda mostralo
displayUser('stolinski').catch(error => handleError(error));