import Meta from '../components/metadata/Meta';
import {
  TITLE_MESSAGE,
  DESCRIPTION_MESSAGE,
  KEYWORDS_MESSAGE
} from './../constant/message';

const Home = () => {
  return (
    <div>
      <Meta
        title={TITLE_MESSAGE}
        description={DESCRIPTION_MESSAGE}
        keywords={KEYWORDS_MESSAGE}
      />
    </div>
  );
}

export default Home;
