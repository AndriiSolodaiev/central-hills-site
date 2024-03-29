// export function newsCard({ type, typeTitle, title, date, text, href, image } = {}) {
//     return `

//     <a class="news-card ${type ? type : 'news'}" href="${href}"><img class="news-card__image" src="${image}">
//         <div class="news-card__text">
//             <div class="news-card__label">${typeTitle}</div>
//             <div class="news-card__title">${title}</div>
//             <p>${text}</p>
//             <div class="news-card__date">
//                 <svg class="icon--calendar" role="presentation">
//                     <use xlink:href="#icon-calendar"></use>
//                 </svg><span>${date}</span>
//             </div>
//         </div>
//     </a>
//     `;
// }
export function newsCard({ img, date, title, id, ref } = {}) {
  return `
  <a class="progress-card" href="${ref}" data-card-id="${id}">
  <div class="progrss-img-wrap"> <img src="${img}" alt="prgress" /></div>
  <div class="progress-card__descr-wrap">
      <h3 class="progress-card__title">${title}</h3>
      <p class="progress-card__date">${date}</p>
  </div>
</a>`;
}

// export function newsCardArray(newsArray) {
//   const newsCards = document.querySelector('.news__container--last');
//   newsArray.forEach(item => {
//     newsCards.insertAdjacentHTML('afterbegin', newsCard(item));
//   });
// }
