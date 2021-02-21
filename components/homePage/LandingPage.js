import { Header } from '../headers/Header';
import { Advertise } from './Advertise';
import { Partners } from './Partners';
import { Info } from '../footer/Info';
import { AllProducts } from '../product/all/AllProducts';

export const LandingPage = (props) => {
  console.error('+++++++++++ LandingPage before ++++++++', props);
  const { allProductsData } = props;
  console.error('+++++++++++ LandingPage after ++++++++', props);
  return (
    <>
      <Header />
      <Advertise />
      <AllProducts allProductsData={allProductsData} />
      <Partners />
      <Info />
    </>
  );
};

LandingPage.defaultProps = {
  allProductsData: [],
};
