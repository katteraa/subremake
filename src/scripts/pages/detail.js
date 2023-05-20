import UrlParser from '../routes/url-parser';
import sourceData from '../data/source';
import { createMovieDetailTemplate } from '../views/templates/creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await sourceData.detailResto(url.id);
    const movieContainer = document.querySelector('#restaurant');
    movieContainer.innerHTML = createMovieDetailTemplate(restaurant);
  },
};

export default Detail;
