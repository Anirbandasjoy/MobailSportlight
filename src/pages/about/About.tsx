import Banner from "@/components/banner/Banner";
import { FaStar } from "react-icons/fa";

function About() {
  return (
    <div>
      <Banner
        imageURL="https://media.istockphoto.com/id/1411931989/photo/happy-portrait-smiling-young-asian-woman-using-smartphone-isolated-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=KE2sUBzZpTVBKkJhy6V070ZPhQPTMFk6mREcVfECT0I="
        headingText="About Us"
        subheadingText="Pleas explore my mobail website visite here and my website"
      />

      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        {/* <header className="bg-blue-200 text-gray-600 py-4 text-center">
          <h1 className="text-3xl font-bold">Mobile Haven</h1>
        </header> */}

        {/* Hero Section */}
        <section className="bg-white text-center py-12">
          <img
            src="https://www.91-img.com/gallery_images_uploads/2/9/29544b57b8f16d5ebfe7f92d9c90043b5fc68b0f.jpg?tr=h-630,c-at_max,q-80"
            alt="Latest Mobile Devices"
            className="mx-auto mb-6 w-96 h-96 rounded-lg shadow-md"
          />
          <h2 className="text-2xl font-bold mb-4">
            Discover the Latest in Mobile Technology
          </h2>
          <p className="text-gray-700">
            At Mobile Haven, we bring you the latest and greatest in mobile
            technology. Explore our collection of top-tier mobile devices and
            accessories.
          </p>
        </section>

        {/* About Us Section */}
        <section className="bg-blue-50 text-center py-12 px-6">
          <p className="text-gray-700 max-w-2xl mx-auto">
            Founded in 2023, Mobile Haven is dedicated to offering high-quality
            mobile devices and exceptional customer service. Our mission is to
            make cutting-edge technology accessible to everyone.
          </p>
        </section>

        {/* Our Services Section */}
        <section className="bg-white text-center py-12 px-6">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Wide Selection</h3>
                <p className="text-gray-700">
                  Choose from a wide range of the latest mobile devices and
                  accessories.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
                <p className="text-gray-700">
                  Get your products delivered quickly with our fast and reliable
                  shipping.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Customer Support</h3>
                <p className="text-gray-700">
                  Our support team is here to assist you with any queries or
                  concerns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-blue-50 text-center py-12 px-6">
          <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaStar className="text-yellow-500 mb-2" />
                <p className="text-gray-700">
                  "Amazing service and fast delivery! I couldn't be happier with
                  my new phone."
                </p>
                <p className="mt-4 font-bold">- John D.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaStar className="text-yellow-500 mb-2" />
                <p className="text-gray-700">
                  "Great selection and competitive prices. Highly recommend
                  Mobile Haven!"
                </p>
                <p className="mt-4 font-bold">- Sarah K.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-400 text-white text-center py-8">
          <h2 className="text-xl font-bold mb-4">
            Ready to Find Your Perfect Mobile?
          </h2>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg text-lg">
            Explore Now
          </button>
        </section>
      </div>
    </div>
  );
}

export default About;
