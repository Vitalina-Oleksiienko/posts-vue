import axios from "axios";

export const postModule = {
    state: () => ({
        posts: null,
      page: 1,
      limit: 10,
      totalPages: 0,
    }),
    getters: {

    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setLimit(state, limit) {
            state.limit = limit;
        },
        
    }, 
    actions: {
        async fetchPosts({state, commit}) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit('setPosts', response.data);
        commit('setTotalPages'.Math.ceil(response.headers["x-total-count"] / state.limit));
      } catch (error) {
        console.log(error);
      }
    },

    },
    namespaced: true,
}