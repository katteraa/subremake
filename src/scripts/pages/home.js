import sourceData from '../data/source';
import { createMovieItemTemplate } from '../views/templates/creator';

const Home = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">home</h2>
    <div id="restaurant" class="restaurant">
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await sourceData.listResto();
    const moviesContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      moviesContainer.innerHTML += createMovieItemTemplate(restaurant);
    });
  },
};

export default Home;
