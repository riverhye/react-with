import { useLocation } from 'react-router-dom';

const CatDetail = () => {
  const { state } = useLocation();
  const { imgPath } = (state as { imgPath: string }) || {};

  return (
    <>
      <div className="container mx-auto">
        <h3>상세 페이지</h3>
        <div className="bg-green-200">
          <p>No.</p>
          <div className="w-72">
            <img
              src={`${process.env.REACT_APP_CAT_API_DOMAIN}cat/${imgPath}`}
              alt="cat img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatDetail;
