import {ElementWork} from './sectionElementWork';
export class Section {
   constructor(rootElement, sectionData) {
      this.rootElement = rootElement;
      this.sectionData = sectionData;
      this.elementWork = new ElementWork();
      this.render();
      console.log(rootElement, sectionData);
   }
   render() {
      this.sectionData.forEach(sectionElement => {
         const { title , description} = sectionElement;
         const sectionWorkData  = `
         <div class="section__content section__content_white">
            <h2 class="section__title section__title_darken">
               ${title}
            </h2>
            <p class="section__title_darken">${description}</p>
            <div class="section__work-container">
               <div class="section__item">
                  <img class="section__item__image" src="https://image.flaticon.com/icons/svg/1886/1886069.svg">
                  Lorem
                  <p class="section__title_darken">Loremssss</p>
               </div>
               <div class="section__item">
                  <img class="section__item__image" src="https://image.flaticon.com/icons/svg/1886/1886069.svg">
                  Lorem
                  <p class="section__title_darken">Loremssss</p>
               </div>
               <div class="section__item">
                  <img class="section__item__image" src="https://image.flaticon.com/icons/svg/1886/1886069.svg">
                  Lorem
                  <p class="section__title_darken">Loremssss</p>
               </div>
               <div class="section__item">
                  <img class="section__item__image" src="https://image.flaticon.com/icons/svg/1886/1886069.svg">
                  Lorem
                  <p class="section__title_darken">Loremssss</p>
               </div>
            </div>
         </div>
         `;
         this.rootElement.innerHTML += sectionWorkData;
      });
   }
}