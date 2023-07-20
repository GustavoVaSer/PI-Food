function validation(newRecipe) {
  let regexUrl = new RegExp( // se utiliza para verificar si una cadena representa una URL válida
    "^(https?:\\/\\/)?" + // protocol: verifica si la cadena comienza con "http://" o "https://". La parte ? hace que esta parte sea opcional
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name: verifica el dominio de la URL
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address: verifica si la URL contiene una dirección IP en lugar de un dominio
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path: verifica el puerto y la ruta de la URL
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string: verifica la cadena de consulta (query string) en la URL
      "(\\#[-a-z\\d_]*)?$", // fragment locator: verifica el fragmento en la URL (el identificador de anclaje)
    "i"
  );
  let error = {};
  if (newRecipe.name === "") {
    error.name = "Name is required";
  }

  if (newRecipe.healthscore === "") {
    error.healthscore = "Healthscore is required";
  }

  if (newRecipe.summary === "") {
    error.summary = "Summary is required";
  }

  if (newRecipe.steps === "") {
    error.steps = "Steps is required";
  }

  if (newRecipe.image === "") {
    error.image = "Image is required";
  }

  if (!/^[A-Za-z\s]*$/.test(newRecipe.name)) {
    error.name = "The recipe name must not have any numerical characters";
  }

  if (newRecipe.healthscore.length > 3) {
    error.healthscore = "You must enter a valid healthscore";
  }

  if (!regexUrl.test(newRecipe.image)) {
    error.image = "You must provide an URL";
  }

  return error;
}

export default validation;
