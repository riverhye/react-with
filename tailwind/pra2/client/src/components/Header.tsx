import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="bg-yellow-300 flex justify-around p-6 font-bold">
        <div className="">
          <span>Logo</span>
        </div>
        <div className="flex justify-end ml-40">
          <Link to="/" className="text-2xl mx-20">
            🏠
          </Link>
          <Link to="/login" className="text-2xl ">
            👋
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
