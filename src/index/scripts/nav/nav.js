
export class TopNavigation {
   constructor (rootElement, navLinks) {
      this.rootElement = rootElement;
      this.navLinks = navLinks;
      this.togglerMenu = this.togglerMenu.bind(this);
      this.logo;
      this.menu;
      this.toggleBtnBox;
      this.render();
   }

   togglerMenu() {
      this.rootElement.classList.toggle('nav_opened');
   }

   render () {
      this.logo = document.createElement('a');
      this.logo.classList.add('logo');
      this.logo.textContent = 'LOGO';
      this.rootElement.appendChild(this.logo);

      this.menu = document.createElement('ul');
      this.menu.classList.add('menu');

      this.rootElement.appendChild(this.menu);

      this.navLinks.forEach(navLink => {
         const { link, title} = navLink;
         const elementLi = `
            <li class="menu__item">
               <a class="menu__link" href=${link}>${title}</a>
            </li>
         `;
         this.menu.innerHTML += elementLi;
      });

      this.toggleBtnBox = `
       <div class="mobile-controls">
         <div class="burger">
            <div class="burger__row"></div>
            <div class="burger__row"></div>
            <div class="burger__row"></div>
         </div>
       </div>
      `
      this.rootElement.innerHTML += this.toggleBtnBox;

      const burger = document.querySelector('.burger');
      burger.addEventListener('click', () => {
          this.togglerMenu();
      });
   }
}