import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const {logout}=useAuth0()
  return (
    <div className="flex flex-col gap-4 w-full">
      <Link to="/user-profile" className=" bg-white items-center font-bold hover:text-orange-500 block">User Profile</Link>
      <Button className="font-bold px-3  hover:bg-gray-500 flex-1" onClick={async()=>await logout()}>Log out</Button>
    </div>
  );
};

export default MobileNavLinks;
