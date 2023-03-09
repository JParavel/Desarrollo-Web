const datos = require('./datos.json');


function getFinal(assignments) {
  return assignments.reduce((prev, curr) => {
    return prev + curr.grade * curr.weight
  }, 0
  )
}

function getPromedio(courses) {
  let finales = courses.map(course => getFinal(course.assignments))
  let sum = finales.reduce((prev, curr) => prev + curr)
  let promedio = sum / finales.length
  return promedio
}

function puntoUno(estudiantes) {
  // CODIGO DE PUNTO 1 AQUI
  return estudiantes.filter(estudiante => {
    let promedio = getPromedio(estudiante.courses)
    console.log(promedio)
    return promedio > 2.5
  }).map(estudiante => estudiante.personal_info)

}

puntoUno(datos)

function puntoDos(products, filters) {
  var filteredProducts = products.filter(product => pro);

  for (let i = 0; i < products.length; i++) {
    if ((filters.id && products[i].id === filters.id) || !filters.id) {
      if (
        (filters.organization && products[i].organization === filters.organization) ||
        !filters.organization
      ) {
        if ((filters.owner && products[i].owner === filters.owner) || !filters.owner) {
          filteredProducts = [filteredProducts, products[i]];
        }
      }
    }
  }

  return filteredProducts;
}

function puntoTres(estudiantes) {
  // CODIGO DE PUNTO 3 AQUI

  return [];
}

function puntoCuatro(user, items) {
  const response = [];
  const activeltems = items.filter(item => item.active);

  // for (let i = 0; i < items.length; i++) {
  //   if (items[i].active === true) {
  //     activeltems.push(items[i]);
  //   }
  // }

  const numNotifs = activeltems.length;
  const userName = user.first_name;

  response.push(userName ? ("Bienvenido, " + userName) : "Bienvenido")
  // if (userName === undefined) {
  //   response.push('Bienvenido');
  // } else {
  //   response.push('Bienvenido, ' + userName);
  // }
  response.push(numNotifs ? ('Tiene ' + numNotifs + ' notificaciones pendientes. ') : 'No tiene notificaciones. ')

  // if (numNotifs === 0) {
  //   response.push('No tiene notificaciones. ');
  // } else {
  //   response.push('Tiene ' + numNotifs + ' notificaciones pendientes. ');
  // }
  return response;
}

module.exports = {
  puntoUno,
  puntoDos,
  puntoTres,
  puntoCuatro,
};
