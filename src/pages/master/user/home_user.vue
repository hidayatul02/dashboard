<template>
  <div class="w-auto h-auto bg-[#FFEFD5]">
    <div
      class="h-[100px] bg-[#FFEFD5] flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
    >
      <div class="flex items-center space-x-2">
        <img src="@/assets/logo_bem.png" class="w-auto h-20" alt="" />
        <span class="text-xl font-bold whitespace-nowrap">BEM PCR</span>
      </div>
      <!-- Hambuger menu -->
      <div class="cursor-pointer w-[30px]" @click="toggleSideBar"></div>
      <!-- Search bar -->

      <div class="w-[calc(100%-30px)] flex">
        <div class="w-[calc(100%-200px)] flex justify-center">
          <!-- Search bar -->
          <form class="flex items-center w-[500px]">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-auto text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </form>
        </div>
        <!-- User login -->
        <div class="w-[200px]">
          <div
            class="flex items-center justify-start space-x-4"
            @click="toggleDrop"
          >
            <img
              class="w-10 h-10 rounded-full border-2 border-gray-50"
              :src="user.gambar"
              alt="Profil"
            />
            <div class="font-semibold dark:text-white text-left">
              <div class="text-md text-gray-900 dark:text-gray-900">
                {{ user.name }}
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                {{ user.role }}
              </div>
            </div>
          </div>
          <!-- Drop down -->
          <div
            v-show="showDropDown"
            class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1 text-left" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
                >Account settings</a
              >
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
                >Support</a
              >
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
                >License</a
              >

              <button
                @click="logout"
                type="submit"
                class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
      <div class="border border-gray-300 rounded-md p-[20px] h-full">
        <router-view></router-view>
        <h2 class="text-xl font-bold">Siap berbagi hari ini?</h2>
        <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
          <div class="grid grid-cols-3 gap-4">
            <div
              class="bg-white rounded-md p-4 shadow-md"
              v-for="artikel in data"
              :key="artikel.id"
            >
              <router-link
                class="btn"
                :to="{
                  name: 'donasi_user',
                  params: { id: artikel.id_artikel },
                }"
              >
                <div :align="'center'" class="justify-center">
                  <h3>{{ artikel.judul_artikel }}</h3>
                  <img
                    :src="artikel.image"
                    class="w-92 h-auto p-3"
                    alt="Presentation Image"
                  />
                </div>
                <p class="text-gray-700">
                  {{ artikel.konten }}
                </p>
              </router-link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import axios from "axios";
export default {
  data() {
    return {
      showDropDown: false,
      showSide: true,
      data: null,
    };
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.getters.getUser);
    const logout = async () => {
      store
        .dispatch("logout")
        .then(() => {
          alert("Log out berhasil");
          location.reload();
        })
        .catch(() => {
          alert("Log out out gagal");
        });
    };
    return {
      logout,
      user,
    };
  },
  mounted() {
    // this.createCharts();
    axios
      .get("artikel")
      .then((response) => {
        this.data = response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
  methods: {
    // hide show side bar
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
    // toggle user
    toggleDrop() {
      this.showDropDown = !this.showDropDown;
    },
  },
};
</script>
