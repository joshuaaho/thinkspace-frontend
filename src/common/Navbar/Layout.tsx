interface NavbarLayoutProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

function NavbarLayout({ left, center, right }: NavbarLayoutProps) {

  return (
    <nav role="navigation" className="flex items-center justify-between w-full h-16 bg-base-300 px-8">
      {/* Left Section */}
      <div className="flex items-center flex-0">{left}</div>

      {/* Center Section */}
      <div className="flex items-center justify-center flex-1">{center}</div>

      {/* Right Section */}
      <div className="flex items-center justify-end flex-0">{right}</div>
    </nav>
  );
}

export default NavbarLayout;