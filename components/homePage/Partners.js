import { listPartners, } from '../../constant/listedObject';
import LandingPageStyle from './homePage.module.css';
import {translateHook} from '../../locales/translate'

export const Partners = () => {
  const translate = translateHook()
  return (
    <div className={LandingPageStyle.listPartners}>
      <h2 className={LandingPageStyle.title}>{translate.ourPartners}</h2>
      <div className={LandingPageStyle.infoPartner}>
        {
          listPartners.map((partner, index) => (
              <img
                src={partner.imgPath}
                alt={partner.imgAlt}
                key={index}
                className={LandingPageStyle[`partner_${index}`]}
              />
            )
          ) 
        }
      </div>
    </div>
  )
};
