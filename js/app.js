function cambiarTitulo() {
  console.log("Desde la funcion cambiar Titulo");
  //buscar del html el elemento que me interesa h1
  let titulo = document.querySelector("h1");
  // let titulo = document.getElementsByTagName('h1');
  console.log(titulo);
  //modificar el objeto
  titulo.innerHTML = "Titulo nuevo";
  titulo.className = "display-4 tituloPrincipal";
}

function verMas() {
  console.log("desde la funcion ver Mas");
  //buscar el nodo/objeto padre
  let sectionPadre = document.getElementsByClassName("container");
  console.log(sectionPadre[1]);

  //crear un nuevo parrafo
  let parrafoNuevo = document.createElement("p"); //<p></p>
  //agregarle texto y clases
  parrafoNuevo.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur soluta dicta blanditiis debitis quam iste quod. Earum assumenda perferendis voluptates, optio dolorem minima sequi voluptatem iste at, ipsam cum! Sapiente officia asperiores porro alias voluptatem nesciunt officiis consequuntur eos, fugit eveniet saepe! Ullam rem tenetur placeat maxime voluptatem quaerat accusantium! Quas nam impedit quos soluta praesentium ipsum repellat sapiente. Sequi ratione accusantium quos iste officia. Error id inventore, voluptas alias modi cupiditate. Quaerat molestiae et sed deleniti porro possimus esse a quod incidunt. Accusantium quasi, quo aliquid quas nulla expedita optio ea repellat tempora ipsam, voluptatibus libero consequatur dolorum? Ad at sint, eos doloribus aperiam dolore iure quo eum quisquam hic adipisci quaerat sequi vel explicabo possimus nihil incidunt nostrum illum debitis similique nemo, totam voluptates reprehenderit? Nemo, pariatur tempore expedita voluptates velit corrupti similique illo dolorem, deserunt assumenda eligendi quos error labore ducimus? Illo ipsam quis laboriosam ut esse accusamus, maiores perferendis. Facere provident maiores quibusdam obcaecati iure, numquam laudantium iste cumque eligendi. Amet eveniet minima earum quo placeat delectus aliquid, sequi officia quod impedit quisquam fugit, dolore quam, velit veniam ipsum ab quos eius. Aliquam corrupti deleniti libero laboriosam ratione pariatur cupiditate iste enim necessitatibus, illum accusantium!";
  parrafoNuevo.className = "lead";
  console.log(parrafoNuevo);
  //agregar el parrafo nuevo en el dom
  //   sectionPadre[1].appendChild(parrafoNuevo); //agregar nodo nuevo al final;
  //   sectionPadre[1].prepend(parrafoNuevo); //agregar nodo nuevo al principio;
  sectionPadre[1].insertBefore(
    parrafoNuevo,
    document.querySelector("#btnVerMas")
  ); //agregar nodo nuevo al principio;
}
