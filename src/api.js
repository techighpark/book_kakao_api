import axios from "axios";

const client = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK b3270412b066d2a0c62319703c45639b`,
  },
});

export const bookSearch = async (query, sort, page, size, target) => {
  const {
    data: { documents },
  } = await client("/v3/search/book", {
    params: { query, sort, page: "1", size: "5", target },
  });
  return documents;
};
