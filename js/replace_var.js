const city = "Celendín"
const age = "2026"
const edition = "tercer"
const author = "Gustavo Perez"

name_page = document.getElementById("name_page");
name_author =  document.getElementsByName("author");
content = document.getElementById("content1");
titles = document.getElementsByClassName("title");
subtitles = document.getElementsByClassName("subtitle");

/////////////////////////////////////////////////////////
console.log(name_author[0].content);
name_page.textContent = `Encuentro Andino Astronómico ${city} ${age}`;
name_author[0].content = author;

let n = titles.length;
for(let i=0; i<n; i++){
    titles[i].textContent = `${edition.toUpperCase()} ENCUENTRO ANDINO ASTRONÓMICO`;
    subtitles[i].textContent = `${city.toUpperCase()} ${age}`;
}

content.innerHTML += `¡Bienvenido(a) al <b>${edition} Encuentro Andino Astronómico ${city} ${age}</b>, Prepárate para embarcarte en un viaje emocionante a través del cosmos mientras exploramos los misterios del universo. Este evento está diseñado para entusiastas de todas las edades y niveles de experiencia en astronomía. Únete a nosotros para una serie de fascinantes charlas y presentaciones impartidas por expertos en el campo, donde descubrirás los secretos de las estrellas, los planetas, las galaxias y más. Desde la astrofísica hasta la exploración espacial, nuestro programa ofrece una amplia gama de temas que te dejarán maravillado. Además de las conferencias, tendrás la oportunidad de observar el cielo nocturno a través de nuestros telescopios. No importa si eres un principiante curioso o un aficionado experimentado, ¡hay algo para todos en nuestro evento de Astronomía! Únete a nosotros y déjate inspirar por la belleza y el asombro del universo.`