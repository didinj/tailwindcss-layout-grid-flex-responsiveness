const ResponsiveNavbar = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-blue-600 text-white">
      <div className="text-xl font-bold mb-2 md:mb-0">MyApp</div>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveNavbar;
