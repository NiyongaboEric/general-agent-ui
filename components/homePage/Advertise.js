import Image from 'next/image';
import { advertisingImage } from '../../constant/listedObject';
import LandingPageStyle from './homePage.module.css';

export const Advertise = () => {
  return (
    <div className={LandingPageStyle.landinPageAdvert}>
      {
        advertisingImage.map((advert, index) => (
          <Image
            src={advert.imgPath}
            alt={advert.imgAlt}
            width={900}
            height={350}
            key={index}
          />
        ))
      }
    </div>
  );
};
