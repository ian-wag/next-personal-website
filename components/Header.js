import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <nav className="container m-auto grid grid-cols-3 bg-white items-center justify-center p-4">
        <div className=" col-start-2 justify-self-center">
          <Link href="/">
            <a className="text-xl text-gray-800 font-semibold">ian</a>
          </Link>
        </div>
        <div className="flex justify-self-end items-center">
          <Link href="/work">
            <a className="mr-6 lg:mr-10 text-blue-900 hover:text-indigo-600">work</a>
          </Link>
          <Link href="/info">
            <a className=" text-blue-900 hover:text-indigo-600">info</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
