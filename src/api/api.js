// fetch HTTP request

export default async function fetchData(url) {
  let res;

  try {
    const data = await fetch(url);
    res = await data.json();
  } catch (error) {
    throw new Error('fetch failed', error);
  }

  return res;
}
