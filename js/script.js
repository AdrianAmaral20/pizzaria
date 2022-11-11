let modalQt = 1
const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);


// Listagem das pizzas
pizzaJson.map((e, i) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', i)
  pizzaItem.querySelector('.pizza-item--img img').src = e.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${e.price.toFixed(2)}`;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = e.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = e.description;
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    let id = e.target.closest('.pizza-item').getAttribute('data-key');
    modalQt = 1;

    c('.pizzaBig img').src = pizzaJson[id].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[id].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[id].description;
    c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[id].price.toFixed(2)}`;
    c('.pizzaInfo--size.selected').classList.remove('selected');
    cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
      if (sizeIndex === 2) {
        size.classList.add('selected');
      };
      size.querySelector('span').innerHTML = pizzaJson[id].sizes[sizeIndex];
    });

    c('.pizzaInfo--qt').innerHTML = modalQt;

    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1;
    }, 200);
  });


  c('.pizza-area').append(pizzaItem);
});


// Eventos do Modal
function closeModal() {
  c('.pizzaWindowArea').style.opacity = 0;
  setTimeout(() => {
    c('.pizzaWindowArea').style.display = 'none';
  }, 500);
};

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((i) => {
  i.addEventListener('click', closeModal)
});

c('.pizzaInfo--qtmenos').addEventListener('click', () => {
  if (modalQt > 1) {
    modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt;
  }
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
  modalQt++;
  c('.pizzaInfo--qt').innerHTML = modalQt;
});

cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
  size.addEventListener('click', (e) => {
    c('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
  });
});