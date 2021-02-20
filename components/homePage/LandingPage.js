import { Header } from '../headers/Header';
import { Advertise } from './Advertise';
import { Partners } from './Partners';
import { Info } from '../footer/Info';

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Advertise />
      <Partners />
      <Info />
    </>
  );
};
