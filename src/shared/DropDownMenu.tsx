import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Github,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

const DropDownMenu = ({
  isOpenModal,
  setIsOpenModal,
}: {
  isOpenModal: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsOpenModal: any;
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="">
          {/* {data?.payload ? (
            <Avatar className="">
              {data?.payload?.profileImage === null ? (
                <AvatarFallback className="bg-gray-200">
                  {data?.payload?.name?.slice(0, 2)}
                </AvatarFallback>
              ) : (
                <AvatarImage
                  src={data?.payload?.profileImage}
                  alt={data?.payload?.name}
                />
              )}
            </Avatar>
          ) : (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )} */}
          <Avatar>
            <AvatarImage
              src="https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/434365626_978377040294607_3511598755254867422_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGgIH1B4roCukjCxrPaerB4rJwCHn9XMz-snAIef1czPzTh7NdYQ7eZn2O6q-3y9L0B35JGSlLD9BA1fR648gT9&_nc_ohc=KvOUI0FVCYcQ7kNvgFgSgST&_nc_ht=scontent.fdac15-1.fna&gid=AL9xWaW2gHwGieDemvaXQun&oh=00_AYDlTrO3_L6dYR2VlGmT38lLqQJx9HNuQugBtYSz5DQ3qg&oe=66B14864"
              alt="Anirban"
            />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="cursor-pointer">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link to="/dashboard">Dashboard</Link>
              {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <Link to="/dashboard/settings">Settings</Link>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup></DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsOpenModal(!isOpenModal)}>
            <LogOut className="mr-2 h-4 w-4" />
            <h1>Log out</h1>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <AlertDialog open={isOpenModal} onOpenChange={setIsOpenModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Are you absolutely sure?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter className=" text-left">
            <AlertDialogCancel className="text-center w-full">
              No
            </AlertDialogCancel>
            <AlertDialogAction className="w-full" onClick={handleLogOut}>
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> */}
    </div>
  );
};

export default DropDownMenu;
