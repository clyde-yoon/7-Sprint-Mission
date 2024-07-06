export async function getData(page, pageSize, order){
const pageURL = `page=${page}&pageSize=${pageSize}`;
const query = `${order}`;

const response = await fetch(
`https://panda-market-api.vercel.app/products?${pageURL}&orderBy=${query}`);
const body = await response.json()
return body;
}