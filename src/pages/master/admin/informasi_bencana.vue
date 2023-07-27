<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div class="w-[500px] h-full bg-[#FFEFD5] text-black" v-show="showSide">
      <div class="h-auto items-center">
        <div class="px-[100px]">
          <img src="@/assets/logo_bem.png" class="w-auto h-auto" alt="" />
        </div>
      </div>
      <div class="h-auto bg-[#FFEFD5] py-[20px]">
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <router-link
              to="/home_admin"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-[#F5B997] hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                aria-hidden="true"
                class="mr-2 w-[25px] h-[25px] fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Home
            </router-link>
            <router-link
              to="/penggalangan_dana"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-[#F5B997] hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                aria-hidden="true"
                class="mr-2 w-[25px] h-[25px] fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                ></path>
              </svg>
              Data Penggalangan
            </router-link>
            <router-link
              to="/informasi_bencana"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-[#F5B997] hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                aria-hidden="true"
                class="mr-2 w-[25px] h-[25px] fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Informasi Bencana
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Side Bar -->

    <div class="w-full h-full bg-gray-400">
      <div
        class="h-[50px] bg-[#FFEBDF] flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
      >
        <!-- Search bar -->

        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center"></div>
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
          <div>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Gambar
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Judul
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Konten
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Penerima donasi
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tanggal
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Jumlah donasi
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white divide-y divide-gray-200" align="left">
                <tr v-for="artikel in data" :key="artikel.id_artikel">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      <a class="text-teal-500" :href="artikel.image">Gambar</a>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ artikel.judul_artikel }}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                      {{ artikel.konten }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ artikel.atas_nama }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ artikel.tgl_terbit }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      Rp. {{ artikel.total_donasi }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center space-x-2">
                      <router-link
                        :to="{
                          name: 'edit_artikel',
                          params: { id: artikel.id_artikel },
                        }"
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </router-link>
                      <button
                        class="text-red-600 hover:text-red-900"
                        @click="deleteItem(artikel.id_artikel)"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <!-- Add more rows here -->
              </tbody>
            </table>
            <br />
            <div align="left">
              <router-link class="btn btn-success" to="/tambah_artikel"
                >tambah artikel</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main  -->
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
    deleteItem(id) {
      axios
        .delete(`artikel/${id}`)
        .then(() => {
          alert("berhasil dihapus");
          location.reload();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
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

<style></style>
