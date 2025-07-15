import DesktopNavbar from "@common/Navbar/Desktop";
import MobileNavbar from "@common/Navbar/Mobile";
import { useWindowSize } from "@uidotdev/usehooks";


const Navbar = () => {
  


  const { width } = useWindowSize();
 
  return width && width > 768 ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Navbar;
