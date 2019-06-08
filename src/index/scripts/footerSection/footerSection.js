
export class FooterSection {
   constructor(rootElement, footerElements) {
      this.rootElement = rootElement;
      this.footerElements = footerElements;
      this.footerContent;
      this.render();
   }
   render() {
      this.footerContent = document.createElement('div');
      this.footerContent.classList.add('footer__content');

      this.rootElement.appendChild(this.footerContent);

      this.footerElements.forEach(footerElement => {
         const { title } = footerElement;
         const elementFoot = `
            <div class="footer__item">
               ${title}
            </div>
         `
         this.footerContent.innerHTML += elementFoot;
      });

   }
}