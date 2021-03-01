import Meta from '../components/metadata/Meta';
import {
  TITLE_MESSAGE,
  DESCRIPTION_MESSAGE,
  KEYWORDS_MESSAGE
} from './../constant/message';
import { LandingPage } from '../components/homePage/LandingPage';

const Home = () => {
  return (
    <>
      <Meta
        title={TITLE_MESSAGE}
        description={DESCRIPTION_MESSAGE}
        keywords={KEYWORDS_MESSAGE}
      />
      <LandingPage />
      <div>
      </div>
    </>
  );
}

export default Home
