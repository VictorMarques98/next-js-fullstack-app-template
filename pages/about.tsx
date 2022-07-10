import PrimaryLayout from "../components/layouts/primary";
import SideBarLayout from "../components/layouts/sidebar";
import { NextPageWithLayout } from "./page";

const About: NextPageWithLayout = () => {
    return (
        <section>
            <h1>About page</h1>
        </section>
    )
}

export default About;

About.getLayout = (page) => {
    return (
      <PrimaryLayout>
        <SideBarLayout />
        {page}
      </PrimaryLayout>
    );
  };