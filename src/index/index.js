import './index.scss';
import { navLinks } from './scripts/api/api';
import  { sliderData } from './scripts/api/api';
import { footerData } from './scripts/api/api';
import { TopNavigation } from './scripts/nav/nav';
import { HeaderSection } from './scripts/headerSection/headerSection';
import { FooterSection } from './scripts/footerSection/footerSection';



new TopNavigation(document.querySelector('#topNavigation'), navLinks);
new HeaderSection(document.querySelector('#headerSection'), sliderData);
new FooterSection(document.querySelector('#footerSection'), footerData);