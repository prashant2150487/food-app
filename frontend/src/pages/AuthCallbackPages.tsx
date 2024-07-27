import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AuthCallbackPages() {
  const hashCreatedUser = useRef(false);
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();
  useEffect(() => {
    if (user?.sub && user?.email && !hashCreatedUser.current) {
      createUser({
        email: user.email,
        auth0Id: user.sub,
      });
      hashCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);
  return <div>Loading...</div>;
}

export default AuthCallbackPages;
