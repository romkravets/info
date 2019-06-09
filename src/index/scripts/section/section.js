
export class Section {
   constructor(rootElement, sectionData) {
      this.rootElement = rootElement;
      this.sectionData = sectionData;
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
         </div>
         `;
         this.rootElement.innerHTML += sectionWorkData;
      });
   }
}