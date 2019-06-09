import './index.scss';

import { navLinks } from './scripts/api/api';
import  { sliderData } from './scripts/api/api';
import { sectionData } from './scripts/api/api';
import { footerData } from './scripts/api/api';
import { TopNavigation } from './scripts/nav/nav';
import { HeaderSection } from './scripts/headerSection/headerSection';
import { Section } from './scripts/section/section';
import { FooterSection } from './scripts/footerSection/footerSection';


new TopNavigation(document.querySelector('#topNavigation'), navLinks);
new HeaderSection(document.querySelector('#headerSection'), sliderData);
new Section(document.querySelector('#sectionWork'), sectionData);
new FooterSection(document.querySelector('#footerSection'), footerData);