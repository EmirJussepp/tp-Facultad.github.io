// function FbotonSg(elemento) {
//   if (elemento.innerHTML == 'Dejar de seguir') 
//   {
//     elemento.innerHTML = 'Seguir';
//   } 
//   else 
//   {
//     elemento.innerHTML = 'Dejar de seguir';
//   }
// };
let likes = 200;



const followBtn = document.getElementById('botonSg');
followBtn.addEventListener('click', function (evento) {
  let texto = evento.target.innerText;
  
    if (texto=='Seguir')
  { 
    evento.target.innerHTML = 'Dejar de seguir'

  }
  else {
    evento.target.innerHTML = 'Seguir'
  };
});

// Likes btn
const textLikes = document.getElementById('megustas__text');
const likesBtn = document.getElementById('mg_btn');

// addEventListener: le agrega un evento al likes btn
textLikes.innerHTML = likes;

// clase active: 
// {
  // background-color: rgb(218, 97, 97) ;
  // color: #fff;
  // }
  
  likesBtn.addEventListener('click', function () {
    if ( likesBtn.classList.contains('active') == false ) 
    {
      // si likesBtn no tiene la clase active:
      likes++;
    }
    else 
    {
      // si likesBtn tiene la clase active:
      likes--;
    };
    textLikes.innerHTML = likes;
    likesBtn.classList.toggle('active');
});

let user = '';

// zona de comentarios
const comentBtn = document.getElementById('coment_btn');
const comentInput = document.getElementById('coment_input');
const comentsBlock = document.getElementById('block_coments');
const userInput = document.getElementById('insert_user_input');

// le agrego el evento change al input del usuario
userInput.addEventListener('change', function (evento) {
  // texto del input
  const text = evento.target.value;
  user = text;
  // deshabilito el input
  console.log(user);
  userInput.disabled = 'true';
});

// le agrego el evento change al input del comentario
comentInput.addEventListener('change', function(evento) {

  if ( user != '' ) {
    const comentarioP = document.createElement('p');
    const comentarioB = document.createElement('b');
    comentarioB.innerHTML = user;
    comentarioB.classList.add('user-coment');
    const comentarioSpan = document.createElement('span');
    comentarioSpan.textContent = evento.target.value;

    // hago el append child de comentario p
    comentarioP.appendChild(comentarioB);
    comentarioP.appendChild(comentarioSpan);
    comentarioP.classList.add('user-coment-p');
    // agrego el comenntario a el bloque de comentarios
    comentsBlock.appendChild(comentarioP);

    evento.target.value = '';
  };

});

comentBtn.addEventListener('click', function() {
  if ( user != '' ) {
    comentInput.value = '';
  }
  // alerta del sweet alert
  else {
    Swal.fire('¡No tienes un usuario!')
  }
});

 




















