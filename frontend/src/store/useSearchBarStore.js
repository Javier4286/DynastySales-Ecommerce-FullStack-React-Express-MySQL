import { create } from "zustand";

const useSearchBarStore = create((set) => ({
  searchTerms: {
    byArtistOrAlbum: "",
    byMinPrice: "",
    byMaxPrice: "",
    byCategory: "",
    bySort: false,
  },

  setSearchTerms: (terms) =>
    set((state) => ({ searchTerms: { ...state.searchTerms, ...terms } })),

  clearSearchTerms: () =>
    set({
      searchTerms: {
        byArtistOrAlbum: "",
        byMinPrice: "",
        byMaxPrice: "",
        byCategory: "",
        bySort: false,
      },
    }),
}));

export default useSearchBarStore;
