import { Header } from '../headers/Header';
import { Advertise } from './Advertise';
import { Partners } from './Partners';
import { Info } from '../footer/Info';
import { AllProducts } from '../product/all/AllProducts';

export const LandingPage = (props) => {
  return (
    <>
      <Header />
      <Advertise />
      <AllProducts />
      <Partners />
      <Info />
    </>
  );
};
