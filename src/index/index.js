import './index.scss';
import { TopNavigation } from './scripts/nav/nav';

const navLinks = [
   {
      title: "Home",
      link: "#"
   },
   {
      title: "About",
      link: "#sectionAbout"
   },
   {
      title: "Portfolio",
      link: "#sectionPortfolio"
   },
   {
      title: "Contact",
      link: "#sectionContact"
   },
]

new TopNavigation(document.querySelector('#topNavigation'), navLinks);