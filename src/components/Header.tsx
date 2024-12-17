export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-[100] bg-first">
      <nav className="flex justify-between items-center h-12 px-4 sm:px-8">
        <div>
          <a href="#" className="text-white text-lg font-bold">
            Emanuela Markovic
          </a>
        </div>
        <div className="hidden sm:flex space-x-8">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className="relative text-dark hover:text-text after:content-[''] after:absolute after:w-full after:h-[0.18rem] after:bg-first after:top-8 after:left-0 active"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-dark hover:text-text">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-dark hover:text-text">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-dark hover:text-text">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="text-dark hover:text-text">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:hidden text-white text-2xl cursor-pointer">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};
