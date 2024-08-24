/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/components/ui/use-toast";
import { useUserRegistrationMutation } from "@/redux/baseApi";

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const RegistationProcess = (): JSX.Element => {
  const navigate = useNavigate();
  const params = useParams();
  const { token } = params as { token: string };

  const [error, setError] = useState<boolean>(false);
  const [setUserRegistration, { data, isLoading }] =
    useUserRegistrationMutation();

  const registration = async (): Promise<void> => {
    try {
      await setUserRegistration({
        token: token,
      }).unwrap();
      navigate("/login");
      toast({
        title: "Activation Succesfull",
        description: data?.message,
      });
    } catch (error: any) {
      console.error("Failed to login:", error);
      toast({
        variant: "destructive",
        title: "Invalid Credential.",
        description: error?.data?.message,
      });
      setError(true);
    }
  };

  useEffect(() => {
    registration();
  }, []);

  return (
    <div className="flex items-center justify-center h-[100vh] text-2xl font-bold">
      {isLoading ? (
        <>Loading ......</>
      ) : !error ? (
        <>..... Activating Account!</>
      ) : (
        <div className="text-red-500">
          Registration Failed!
          <Link className="underline text-blue-500" to={"/register"}>
            Try Again ?
          </Link>
        </div>
      )}
    </div>
  );
};

export default RegistationProcess;
