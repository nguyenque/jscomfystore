import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  let companies = ['all', ...new Set(store.map(product => product.company))]
  const companiesDOM = getElement('.companies')
  companiesDOM.innerHTML = companies.map(company => {
    return `<button class="company-btn">${company}</button>`
  }).join("")

  companiesDOM.addEventListener('click', function (e) {
    const element = e.target
    console.log(element);
    if (element.classList.contains('company-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        newStore = [...store]
      } else {
        newStore = store.filter(product => product.company === e.target.textContent)
      }
      display(newStore, getElement('.products-container'))
    }
  })
}

export default setupCompanies;