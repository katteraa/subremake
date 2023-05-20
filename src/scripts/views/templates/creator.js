import CONFIG from '../../data/config';

const makeList = (list) => {
  let items = '';
  list.forEach((item) => {
    items += `<li>${item.name}</li>`;
  });
  return items;
};

const createMovieDetailTemplate = (restaurant) => `
<article class="restoDetail">
<div class="restoDetail__header">
  <h1 class="restoDetail__name">${restaurant.name}</h1>
  <div class="restoDetail__identity">
    <h2 class="restoDetail__address">${restaurant.address}</h2>
    <h3>
      <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
      <span>${restaurant.city}</span>
    </h3>
    <h3>
      <span><i class="fa fa-star" aria-hidden="true"></i></span>
      <span>${restaurant.rating}</span>
    </h3>
  </div>
</div>
<div class="restoDetail__content">
  <div class="restoDetail__wrapper">
    <figure>
      <img 
      src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
      alt="${restaurant.name}" 
      class="restoDetail__img lazyload"
      />
    </figure>
  </div>
  <div class="restoDetail__body">
    <ul class="restoDetail__categories">
      ${makeList(restaurant.categories)}
    </ul>
    <p class="restoDetail__description">${restaurant.description}</p>
    <div class="restoDetail__menus">
      <ul>
        <li>Foods:</li>
          <ul>
          ${makeList(restaurant.menus.foods)}
          </ul>
      </ul>
      <ul>
        <li>Drinks:</li>
          <ul>
          ${makeList(restaurant.menus.drinks)}
          </ul>
      </ul>
    </div>
  </div>
</div>
<div class="restoDetail__reviews">
  <h3 id="reviews__header">Customer Reviews:</h3>
  <form id="review__form" class="restoDetail__form">
    <input type="text" placeholder="Name" id="review__name">
    <textarea placeholder="Review" id="review__text"></textarea>
    <button type="submit" class="review__btnSubmit">Send Review</button>
  </form>
  <ul>
  ${restaurant.customerReviews.map((review) => (`
    <li class="restoDetail__reviews__item">
      <div>
        <i class="fa fa-user avatar" aria-hidden="true"></i>
      </div>
      <div>
        <h3> ${review.name}</h3>
        <p> ${review.review}</p>
        <time> ${review.date}</time>
      </div>
    </li>`)).join(' ')}
  </ul>
</div>
</article>
`;
const createMovieItemTemplate = (restaurant) => `
<img class="list_item_thumb" src="${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
<div class="city">${restaurant.city}</div>
<div class="list_item_content">
    <p class="list_item_rating">
        Rating : 
        <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
    </p>
    <h1 class="list_item_title"><a href="#">${restaurant.name}</a></h1>
  
<div class="list_item">  <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
</div>
</div>
`;

export { createMovieItemTemplate, createMovieDetailTemplate };
