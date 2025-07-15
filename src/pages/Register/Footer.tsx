import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center">
      <p className="text-sm text-base-content/60">
        Already have an account?
        <Link
          to="/login"
          className="text-primary hover:text-primary-focus hover:underline ml-2"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Footer;
