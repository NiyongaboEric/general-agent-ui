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

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`${server}/api/products`);
    const data = await res.json();
    if (!data) {
      console.error('-----No Data ------>', error);
      return {
        notFound: true,
      }
    }
    console.error('----- Data ------>', data);
    return {
      props: {
        allProductsData: data|| [],
      }
    }  
  } catch (error) {
    console.error('-----error ------>', error);
    return {
      props: {
        allProductsData: null,
      }
    };
  }
};

export default Home;
