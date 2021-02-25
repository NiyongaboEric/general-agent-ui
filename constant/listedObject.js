import {
  KINYARWANDA_LANGUAGE_MESSAGE,
  ENGLISH_LANGUAGE_MESSAGE
} from './message';
import { 
  USA_FLAG_URL,
  RWANDA_FLAG_URL,
  ADVERT_HOME_IMAGE_URL,
  AGENT_LOGO_URL,
  ESP_PARTNER_URL,
  RDB_PARTNER_URL,
  MASTERCARD_FOUNDATION_URL,
} from './urls';

export const languageListProperties = [
  {
    language: 'Kinyarwanda',
    imgPath: RWANDA_FLAG_URL,
    imgAlt: KINYARWANDA_LANGUAGE_MESSAGE,
  },
  {
    language: 'English',
    imgPath: USA_FLAG_URL,
    imgAlt: ENGLISH_LANGUAGE_MESSAGE,
  }
];

export const listPartners = [
  {
    imgName: 'Entrepreneurial Solutions Partners',
    imgAlt: 'Running Tourism Inc Program',
    imgPath: ESP_PARTNER_URL,
  },
  {
    imgName: 'Rwanda Development Board',
    imgAlt: 'Sponsoring program',
    imgPath: RDB_PARTNER_URL,
  },
  {
    imgName: 'Mastercard',
    imgAlt: 'Funding program',
    imgPath: MASTERCARD_FOUNDATION_URL,
  }
];

export const advertisingImage = [
  {
    imgPath: ADVERT_HOME_IMAGE_URL,
    imgAlt: 'Everyone is ordering to hit the expect number',
  }
];

export const defaultImages = {
  logo: {
    imgPath: AGENT_LOGO_URL,
    imgAlt: 'General Agent logo',
  }  
};
