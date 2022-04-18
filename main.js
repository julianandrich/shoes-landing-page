let btnComprar = document.querySelector('.btn-comprar');

btnComprar.addEventListener('click', () => {
  let checkbox = document.querySelector('input[type="radio"]:checked');
  let stockDisponible = document.querySelector('.stock_detalle_disp');
  let msj = document.querySelector('.mensaje_container');

  if(checkbox) {
    
    stockDisponible.style.display = 'none';
    msj.style.display = 'block';
    checkbox.checked = false;
    
    setTimeout(() => {
      stockDisponible.style.display = 'block';
      msj.style.display = 'none';
    }, 4000);
  }
})