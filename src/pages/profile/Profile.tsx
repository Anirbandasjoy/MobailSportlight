import WrapNavbar from "@/components/banner/WrapNavbar";
import { useSingleUserQuery } from "@/redux/baseApi";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  const { data: singleUser } = useSingleUserQuery({ userId });
  return (
    <div>
      <WrapNavbar imageURL="https://images.unsplash.com/photo-1568581789190-ae90a7da930b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div>
        <div className=" p-8  max-w-sm mx-auto">
          <div className="flex justify-center">
            {!singleUser ? (
              <img
                className="w-24 h-24 rounded-full shadow-md"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            ) : (
              <img
                className="w-24 h-24 rounded-full shadow-md"
                src={singleUser?.payload?.profileImage}
                alt="Profile"
              />
            )}
          </div>
          <div className="text-center mt-4">
            <h1 className="text-gray-500 text-2xl font-bold">
              {singleUser?.payload?.name}
            </h1>
            <p className="text-gray-500 mt-2">
              User id, {singleUser?.payload?._id}
            </p>
            <p className="text-gray-500 mt-1">
              Email - {singleUser?.payload?.email}
            </p>
            <p className="text-gray-500 mt-1">
              User role - {singleUser?.payload?.role}
            </p>
          </div>
          <div className="flex justify-between items-center text-white mt-4">
            <div className="text-center">
              <span className="font-bold text-lg">65</span>
              <p>Friends</p>
            </div>
            <div className="text-center">
              <span className="font-bold text-lg">43</span>
              <p>Photos</p>
            </div>
            <div className="text-center">
              <span className="font-bold text-lg">21</span>
              <p>Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
