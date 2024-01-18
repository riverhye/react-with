const getCatInfos = async () => {
  const CAT_API_DOMAIN = process.env.REACT_APP_CAT_API_DOMAIN;
  const response = await fetch(`${CAT_API_DOMAIN}api/cats`, {
    method: 'get',
  });
  const infos = await response.json();
  // const imgPath = infos.map((info: Cat) => `${CAT_API_DOMAIN}cat/${info._id}`);
  return infos;
};

// https://cataas.com/cat/TDDEkaYczgTR9L2C

export default getCatInfos;
