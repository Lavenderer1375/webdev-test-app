import Carousel from "@/modules/carousel/Carousel";
import Faq from "@/modules/faq/Faq";
import Footer from "@/modules/footer/Footer";
import Form from "@/modules/form/Form";
import Hero from "@/modules/hero/Hero";

const Campaigns = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <Form />
      <Faq />
      <Footer />
    </div>
  );
};

export default Campaigns;
