import { useEffect, useState } from 'react';
import getCatInfos from './CatImg.tsx';

interface Cat {
  _id: string;
  size: number;
  tags: string[];
  title?: string;
  content?: string;
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
  }, []);

  return (
    <>
      <div className="bg-yellow-300 p-10 font-bold">
        <div className="flex justify-end">
          <a href="#" className="text-2xl mx-3">
            🏠
          </a>
          <a href="#" className="text-2xl ">
            👋
          </a>
        </div>
      </div>

      <div className="flex flex-wrap m-5 justify-center items-start">
        {catList.map((cat: Cat) => (
          <div key={cat._id} className="bg-yellow-100 size-60 md:size-56 m-5">
            <img
              src={`${process.env.REACT_APP_CAT_API_DOMAIN}cat/${cat._id}`}
              className="object-cover object-center w-96 h-32"
            />
            <div className="p-3 font-bold">No. {cat.size}</div>
            <ul className="flex flex-wrap">
              {cat.tags.map((tag) => (
                <li className="mx-1">{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default CatCard;
