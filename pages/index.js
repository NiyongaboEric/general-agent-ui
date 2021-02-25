import Meta from '../components/metadata/Meta';
import {
  TITLE_MESSAGE,
  DESCRIPTION_MESSAGE,
  KEYWORDS_MESSAGE
} from './../constant/message';
import { LandingPage } from '../components/homePage/LandingPage';
import { server } from '../config';


const Home = (props) => {
  const { allProductsData } = props;
  return (
    <>
      <Meta
        title={TITLE_MESSAGE}
        description={DESCRIPTION_MESSAGE}
        keywords={KEYWORDS_MESSAGE}
      />
      <LandingPage
        allProductsData={allProductsData}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/products`);
  const data = await res.json();
  return {
    props: {
      allProductsData: data,
    }
  }
}

export default Home;
