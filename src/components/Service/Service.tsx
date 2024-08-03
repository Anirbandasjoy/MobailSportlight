import { FaCamera, FaWater, FaHeadphones, FaMobileAlt } from "react-icons/fa";

function ServicesSection() {
  return (
    <div className="flex flex-col lg:flex-row container mt-32 items-center justify-between bg-white py-12">
      {/* Services List */}
      <div className="w-full lg:w-1/2 p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <FaCamera className="text-blue-900 mr-3" />
            SERVICE AVAILABLE 24/7
          </h2>
          <p className="text-gray-600">
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <FaWater className="text-blue-900 mr-3" />
            WATER DAMAGE
          </h2>
          <p className="text-gray-600">
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <FaHeadphones className="text-blue-900 mr-3" />
            SPEAKER FAILURE
          </h2>
          <p className="text-gray-600">
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <FaMobileAlt className="text-blue-900 mr-3" />
            LCD REPLACEMENT
          </h2>
          <p className="text-gray-600">
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris.
          </p>
        </div>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg flex items-center">
          <FaCamera className="mr-2" />
          Get a Quote
        </button>
      </div>
      {/* Image */}
      <div className="w-full lg:w-1/2 p-6 flex justify-center">
        <img
          src="https://www.91-img.com/gallery_images_uploads/2/9/29544b57b8f16d5ebfe7f92d9c90043b5fc68b0f.jpg?tr=h-630,c-at_max,q-80"
          alt="Exploded view of a phone"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default ServicesSection;
