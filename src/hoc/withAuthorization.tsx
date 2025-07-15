import { ComponentType } from "react";

import { useAccessToken } from "@store/auth";
import { useNavigate } from "react-router-dom";
import preventDefault from "./preventDefault";

type Base = { onClick?: (e: React.MouseEvent<any>) => void };


const withAuthorizationOnClick = <TProps extends Base>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps) => {
    const accessToken = useAccessToken();
    const navigate = useNavigate();
    const onClick = preventDefault((e: React.MouseEvent<any>) => {

      if (accessToken) {
  
        if (props && props.onClick) {
          props.onClick(e);
        }
      } else {
        navigate("/login");
      }
    });

    return <Component {...props} onClick={onClick} />;
  };
};

export default withAuthorizationOnClick;
