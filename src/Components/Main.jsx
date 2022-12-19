import { RouteMain } from "../Router/RouteMain";
import { Navbar } from "./Navbar";
import FixSocialIcon from "./SocialIcon/FixSocialIcon";

export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <RouteMain />
      <FixSocialIcon />
    </div>
  );
};
