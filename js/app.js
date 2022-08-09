function cambiarTitulo() {
  //buscar del html el elemento que me interesa h1
  let titulo = document.querySelector("h1");
  // let titulo = document.getElementsByTagName('h1');
  //modificar el objeto
  titulo.innerHTML = "Titulo nuevo";
  titulo.className = "display-4 tituloPrincipal";
}

function verMas() {
  //buscar el nodo/objeto padre
  let sectionPadre = document.getElementsByClassName("container");
  let botonVerMas = document.querySelector("#btnVerMas");

  if(botonVerMas.innerHTML === 'Ver mas...'){
      //crear un nuevo parrafo
    //   let parrafoNuevo = document.createElement("p"); //<p></p>
    //   //agregarle texto y clases
    //   parrafoNuevo.innerHTML =
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur soluta dicta blanditiis debitis quam iste quod. Earum assumenda perferendis voluptates, optio dolorem minima sequi voluptatem iste at, ipsam cum! Sapiente officia asperiores porro alias voluptatem nesciunt officiis consequuntur eos, fugit eveniet saepe! Ullam rem tenetur placeat maxime voluptatem quaerat accusantium! Quas nam impedit quos soluta praesentium ipsum repellat sapiente. Sequi ratione accusantium quos iste officia. Error id inventore, voluptas alias modi cupiditate. Quaerat molestiae et sed deleniti porro possimus esse a quod incidunt. Accusantium quasi, quo aliquid quas nulla expedita optio ea repellat tempora ipsam, voluptatibus libero consequatur dolorum? Ad at sint, eos doloribus aperiam dolore iure quo eum quisquam hic adipisci quaerat sequi vel explicabo possimus nihil incidunt nostrum illum debitis similique nemo, totam voluptates reprehenderit? Nemo, pariatur tempore expedita voluptates velit corrupti similique illo dolorem, deserunt assumenda eligendi quos error labore ducimus? Illo ipsam quis laboriosam ut esse accusamus, maiores perferendis. Facere provident maiores quibusdam obcaecati iure, numquam laudantium iste cumque eligendi. Amet eveniet minima earum quo placeat delectus aliquid, sequi officia quod impedit quisquam fugit, dolore quam, velit veniam ipsum ab quos eius. Aliquam corrupti deleniti libero laboriosam ratione pariatur cupiditate iste enim necessitatibus, illum accusantium!";
    //   parrafoNuevo.className = "lead";
    //   //agregar el parrafo nuevo en el dom
    //   //   sectionPadre[1].appendChild(parrafoNuevo); //agregar nodo nuevo al final;
    //   //   sectionPadre[1].prepend(parrafoNuevo); //agregar nodo nuevo al principio;
    //   sectionPadre[1].insertBefore(parrafoNuevo,botonVerMas); //agregar nodo nuevo al principio;
    
    //modificar el boton
      botonVerMas.innerHTML = 'Ocultar';
      botonVerMas.className = 'btn btn-outline-danger';

    //ALTERNATIVA PARA CREAR ELEMENTOS GRANDES
    let parrafoNuevo = '<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum enim placeat eum, eveniet voluptatum reprehenderit perspiciatis nesciunt? Omnis debitis corporis culpa repellat, nostrum delectus. Alias ex doloremque adipisci perspiciatis aspernatur velit dolorum fugit quae quos placeat praesentium libero dicta maiores, deleniti consectetur delectus facilis illo magni qui odio quam distinctio dolore labore. Illum velit, fugiat in dignissimos ut veritatis laudantium maiores? Illum ipsa hic maxime ea repudiandae dolores dignissimos veniam, natus at dolorem praesentium atque perferendis a officiis, cum itaque saepe! Rerum illo, repellendus pariatur similique illum, aliquid voluptate ratione ex mollitia id omnis ab facilis quasi ipsam asperiores sapiente vel eaque iste officia porro voluptatum assumenda. Minima illo sed nesciunt explicabo perferendis ea enim blanditiis quae earum, consequuntur debitis et voluptas! Amet odit odio laborum hic vero! Eum enim, iusto quo ipsam pariatur labore doloribus perspiciatis provident. Perspiciatis hic exercitationem maxime provident enim, necessitatibus impedit, delectus explicabo dolore, modi velit eligendi? Harum rerum perspiciatis voluptas, beatae repellendus porro quia velit deleniti. Quaerat eum quo quos, aperiam, neque exercitationem labore vitae veniam unde quibusdam illo culpa, accusantium aut error doloremque consectetur. Iure illum quisquam illo recusandae tempora quod, non culpa veritatis sed quasi. Laboriosam aperiam quasi nobis iure accusantium!</p>';
    sectionPadre[1].innerHTML += parrafoNuevo; // sectionPadre[1].innerHTML =  sectionPadre[1].innerHTML + parrafoNuevo
    
  }else{

    // console.log(sectionPadre[1].children)
    sectionPadre[1].removeChild(sectionPadre[1].children[3])
     //modificar el boton
     botonVerMas.innerHTML = 'Ver mas...';
     botonVerMas.className = 'btn btn-outline-primary';
  }

}
