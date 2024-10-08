import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { handleGithubLogin, handleGoogleLogin } from "@/helper/auth";
import { useLoginMutation } from "@/redux/baseApi";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface IFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [setLogin, { isLoading }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      await setLogin({ email: data.email, password: data.password }).unwrap();

      toast({
        title: "Login Successfully.",
      });
      navigate("/");
    } catch (error) {
      console.error("Failed to login:", error);
      toast({
        variant: "destructive",
        title: "Invalid Credential.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Card className="w-[400px] shadow-md p-3 ">
        <CardHeader className="">
          <CardTitle className="text-2xl font-semibold">
            Login Your Account
          </CardTitle>
          <CardDescription className="mt-2">
            Enter your email below to login your account
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="flex gap-2">
            <Button
              onClick={handleGithubLogin}
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <FaGithub />
              Github
            </Button>
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <FaGoogle />
              Google
            </Button>
          </div>
          <div className="relative flex items-center my-4">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="mx-4 text-gray-500">OR CONTINUE WITH</span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        id="email"
                        placeholder="m@example.com"
                        className="py-2 mt-1 focus-visible:ring-0 focus:border-blue-500 "
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.email.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="password">Password</Label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                      message: "Invalid password. Try again",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="password"
                        id="password"
                        placeholder="Enter your Password"
                        className="py-2 mt-1 focus-visible:ring-0 focus:border-blue-500"
                      />
                      {errors.password && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.password.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </form>
          <CardDescription className="mt-4 text-center">
            Not Create Account? please{" "}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
