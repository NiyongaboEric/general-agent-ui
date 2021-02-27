import footerInfoStyle from './info.module.css';
import {translateHook} from '../../locales/translate'

export const Info = () => {
  const translate = translateHook()
  return (
    <div className={footerInfoStyle.infoContainer}>
      <p className={footerInfoStyle.developerTeam}>{translate.madeWith} &#10084; {translate.by} General Agent (&#xa9; 2021)</p>
    </div>
  );
};
