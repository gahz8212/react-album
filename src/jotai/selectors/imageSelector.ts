import { atom } from "jotai";
import { pageState } from "../atoms/pageState";
import { searchState } from "../atoms/searchState";
import axios from "axios";
export const imagesData = atom(async get => {
  const API_URL = "https://api.unsplash.com/search/photos";
  const API_KEY = "wN-S4MefyNmjxXhztCh66hmzmLPxZjNd-eVRZ_nqPKk";
  const PER_PAGE = 30;
  const searchValue = get(searchState);
  const pageValue = get(pageState);
  const imageData: { data: { results: [] } } =
    await axios.get(`${API_URL}?query=${searchValue}
        
        &client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}
   `);

  return imageData.data;
});
