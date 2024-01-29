const getCatInfos = async () => {
  const CAT_API_DOMAIN = process.env.REACT_APP_CAT_API_DOMAIN;
  const response = await fetch(`${CAT_API_DOMAIN}api/cats`, {
    method: 'get',
  });
  const infos = await response.json();
  return infos;
};

export default getCatInfos;
