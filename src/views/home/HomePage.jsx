import images from "../../utils/images";
import "../../styles//HomePage.scss";
import { Title } from "../../components/common";
const HomePage = () => {
  return (
    <main className="bg-secondary">
      <section className="sc-banner">
        <div className="banner-item h-100 img">
          <img src={images.banner_1} alt="banner image" className="img-cover" />
        </div>
      </section>
      <section className="sc-wrapper py-5">
        <Title Title={"Our Products"} />
      </section>
    </main>
  );
};

export default HomePage;
