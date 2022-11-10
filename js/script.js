const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

pizzaJson.map((e, i) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  pizzaItem.querySelector('.pizza-item--img img').src = e.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${e.price.toFixed(2)}`;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = e.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = e.description;

  c('.pizza-area').append(pizzaItem);
});