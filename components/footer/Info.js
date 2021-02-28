import footerInfoStyle from './info.module.css';

export const Info = () => {
  return (
    <div className={footerInfoStyle.infoContainer}>
      <p className={footerInfoStyle.developerTeam}>Made with &#10084; by General Agent (&#xa9; 2021)</p>
    </div>
  );
};
