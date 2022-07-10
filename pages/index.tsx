import PrimaryLayout from '../components/layouts/primary';
import SideBarLayout from '../components/layouts/sidebar';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <h1>Hello NextJs</h1>;
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SideBarLayout />
      {page}
    </PrimaryLayout>
  );
};
