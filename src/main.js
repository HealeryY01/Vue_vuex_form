import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

import AppModal from "./components/AppModal.vue";
const app = createApp(App);

const store = createStore({
  state() {
    return {
      userList: [
        {
          id: 1,
          name: "Nguyễn Phong Hào",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhqiwrABra9D_A5vXEVzs6GKjgrNzRE9qzw&s",
          age: 23,
          description: "thân thiện , hoc hỏi nhanh",
          programmingLanguage: ["JS", "JAVA"],
          gender: "Nam",
          type: "ADMIN",
        },
        {
          id: 1,
          name: "Phan Thùy Duyên",
          avatar:
            "https://haycafe.vn/wp-content/uploads/2023/06/Anh-Avatar-nu-ca-tinh.jpg",
          age: 22,
          description: "thân thiện , hoc hỏi nhanh",
          programmingLanguage: ["PHP", "C#"],
          gender: "Nữ",
          type: "CLIENT",
        },
      ],
      searchName: "",
    };
  },
  getters: {
    userListByBoy(state) {
      return state.userList.filter((user) => user.gender === "Nam");
    },
    userListBySearchName(state) {
      const { userList, searchName } = state;
      return userList.filter((user) =>
        user.name.toLowerCase().includes(searchName.toLowerCase())
      );
    },
  },
  mutations: {
    setSearchNameMutation(state, payload) {
      state.searchName = payload;
    },
  },
  actions: {
    setSearchNameAction(context, payload) {
      setTimeout(() => {
        context.commit("setSearchNameMutation", payload);
      }, 500);
    },
  },
});

app.use(store);

app.component("app-modal", AppModal);

app.mount("#app");
