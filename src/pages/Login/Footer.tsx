import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center">
      <p className="text-sm text-base-content/60">
        Don't have an account?
        <Link to="/register" className=" ml-2 text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Footer;
