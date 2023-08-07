import { defineStore } from "pinia";
import { getCategories, getHotSuggests } from "../service/city/home";

const useHomeStore = defineStore("home", {
  state() {
    return {
      hotSuggests: [],
      categories: [],
    };
  },
  actions: {
    getHomeHotSuggests() {
      getHotSuggests().then((res) => {
        this.hotSuggests = res.data;
      });
    },
    getHomeCategories() {
      getCategories().then((res) => {
        this.categories = res.data;
      });
    },
  },
});

export default useHomeStore;
