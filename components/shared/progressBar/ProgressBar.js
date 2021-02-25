import progressBarStyle from './progressBar.module.css';
export const ProgressBar = (props) => {
  const { bgColor, completed } = props;

  const fillerStyle = {
    width: `${completed}%`,
    backgroundColor: bgColor,
  };

  return (
    <div className={progressBarStyle.progressBarContainer}>
      <div className={progressBarStyle.progressTubeBar}>
        <div
          style={fillerStyle}
          className={progressBarStyle.progressFiller}
        />
      </div>
      <span className={progressBarStyle.progressBarlabel}>{`${completed}%`}</span>
    </div>
  );
};
