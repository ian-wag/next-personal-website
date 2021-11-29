import Link from 'next/link';

const Header = () => {
  return (
    <div className=" container max-w-full items-center justify-center sticky top-0 z-50">
      <nav className="grid grid-cols-3 bg-white p-4 border-b border-gray-500">
        <div className=" ">
          <Link href="#home">
            <a className="text-xl font-semibold uppercase">ian</a>
          </Link>
        </div>
        <div className="col-start-3 flex justify-self-end items-center">
          <Link href="#work">
            <a className="mr-4 lg:mr-10 text-blue-900 hover:text-indigo-600 uppercase">work</a>
          </Link>
          <Link href="#contact">
            <a className=" text-blue-900 hover:text-indigo-600 uppercase">info</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
