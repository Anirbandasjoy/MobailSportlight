import Banner from "@/components/banner/Banner";
import MobailsCom from "@/components/mobails/Mobails";
import ServicesSection from "@/pages/about/About";

const Home = () => {
  return (
    <div>
      <Banner
        imageURL="https://media.istockphoto.com/id/1411931989/photo/happy-portrait-smiling-young-asian-woman-using-smartphone-isolated-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=KE2sUBzZpTVBKkJhy6V070ZPhQPTMFk6mREcVfECT0I="
        headingText="Wellcome."
        subheadingText="Pleas explore my mobail website visite here and my website"
      />
      <div>
        <MobailsCom />
      </div>
      <ServicesSection />
    </div>
  );
};

export default Home;
