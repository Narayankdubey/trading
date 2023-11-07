import { ROUTES } from "@/common/constants";
import { useAppDispatch } from "@/redux/hooks";
import AuthContext from "@/utils/AuthContext";
import { getToken } from "@/utils/helper";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { logOutAsync } from "@/pages/auth/authSlice";

const PrivateRoute = ({ children }: { children: any }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    const token = getToken();
    //comment this condition if you don't want authentication
    if (authenticated) {
      // token && dispatch(logOutAsync());
    } else {
      // router.push(ROUTES.LOGIN); // Redirect on the client side
    }
  }, [authenticated, dispatch, router]);

  return <>{children}</>;
};

export default PrivateRoute;
