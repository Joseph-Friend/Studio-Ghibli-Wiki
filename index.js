movies = document.getElementById("movies");

async function getData() {
  const url = "https://ghibliapi.vercel.app/films";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);

    result.forEach(movie => {
        console.log(movie);
        document.getElementById("movies").innerHTML +=  `<article><h3 class=\"title\">${movie.title}</h3><p class=\"subtitle\">By: ${movie.producer}</p><p class=\"subtitle\">${movie.release_date}</p><img src=\"${movie.image}\"><p class=\"content\">${movie.description}</p></article>`
    });
  } catch (error) {
    console.error(error.message);
  }
}

getData();