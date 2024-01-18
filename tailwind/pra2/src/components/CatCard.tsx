import { useEffect, useState } from 'react';
import getCatInfos from './CatImg.tsx';

interface Cat {
  _id: string;
  size: number;
  tags: string[];
}

const CatCard = () => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infos = await getCatInfos();
        setCatList(infos);
        console.log(infos[0].tags);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // const imgPath = infos.map((info: Cat) => `${CAT_API_DOMAIN}cat/${info._id}`);
  }, []);

  return (
    <>
      <div className="bg-yellow-300 p-10 font-bold">고앵이</div>

      <div className="flex flex-wrap">
        {catList.map((cat: Cat) => (
          <div
            key={cat._id}
            className="bg-yellow-100 size-60 md:size-56 hover:backdrop-blur-lg m-5"
          >
            <img
              src={`${process.env.REACT_APP_CAT_API_DOMAIN}cat/${cat._id}`}
              className="object-cover object-center w-96 h-32"
            />
            <div className="p-3 font-bold">No. {cat.size}</div>
            <ul className="flex flex-wrap">
              {cat.tags.map((tag) => (
                <li className="mr-1 p-1px">{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default CatCard;
