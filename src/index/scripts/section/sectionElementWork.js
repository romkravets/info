import { elementWorkData } from '../api/api';

export class ElementWork {
   constructor() {
      this.rootElement = document.querySelector('#sectionWork');
      this.elementWorkData = elementWorkData;
      console.log(this.elementWorkData);
   }
   render() {
      this.elementWorkData.forEach(element => {
         const { image, name, description } = element
         const elementData = `
         <div class="section__item">
            <img src=${image}>
            ${name}
            <p class="section__title_darken">${description}</p>
         </div>
         `;
         this.rootElement.innerHTML += elementData;
      });
   }
}