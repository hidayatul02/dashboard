<template>
  <div class="w-auto h-auto bg-[#FFEFD5]">
    <div
      class="h-auto bg-[#FFEFD5] flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
    >
      <div class="flex items-center space-x-2">
        <img src="@/assets/logo_bem.png" class="w-auto h-20" alt="" />
        <span class="text-xl font-bold whitespace-nowrap">BEM PCR</span>
      </div>
      <!-- Hambuger menu -->
      <div class="cursor-pointer w-[30px]" @click="toggleSideBar"></div>
      <!-- Search bar -->

      <div class="w-[calc(100%-30px)] flex">
        <div class="w-[calc(100%-200px)] flex justify-center"></div>
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
                type="submit"
                @click="logout"
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
      <h2 class="text-xl font-bold">Siap berbagi hari ini?</h2>
      <div class="border border-gray-300 rounded-md p-[20px] h-full row">
        <router-view></router-view>

        <tr class="col-5 ml-10">
          <td>
            <div>
              <div class="mt-4 flex items-center">
                <label
                  for="donor-name"
                  class="text-sm font-medium text-gray-700 w-32 inline-block"
                  >Bank</label
                >
                <input
                  readonly
                  type="text"
                  class="mt-1 block flex-grow px-3 rounded-md sm:text-sm"
                  v-model="bank"
                />
              </div>
              <div class="mt-4 flex items-center">
                <label
                  for="donor-name"
                  class="text-sm font-medium text-gray-700 w-32 inline-block"
                  >Atas Nama</label
                >
                <input
                  readonly
                  type="text"
                  class="mt-1 block flex-grow px-3 rounded-md sm:text-sm"
                  v-model="nama"
                />
              </div>
              <div class="mt-4 flex items-center">
                <label
                  for="donor-name"
                  class="text-sm font-medium text-gray-700 w-32 inline-block"
                  >Rekening</label
                >
                <input
                  readonly
                  type="text"
                  class="mt-1 block flex-grow px-3 rounded-md sm:text-sm"
                  v-model="rekening"
                />
              </div>
              <div class="mt-4 flex items-center">
                <label
                  for="donor-name"
                  class="text-sm font-medium text-gray-700 w-32 inline-block"
                  >Total donasi saat ini</label
                >
                <input
                  readonly
                  type="text"
                  class="mt-1 block flex-grow px-3 rounded-md sm:text-sm"
                  v-model="total"
                />
              </div>
              <div class="mt-4 flex items-center">
                <label
                  for="donor-name"
                  class="text-sm font-medium text-gray-700 w-32 inline-block"
                  >Nama Pendonasi</label
                >
                <input
                  v-model="donatur"
                  type="text"
                  id="donor-name"
                  class="mt-1 block flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Masukkan nama pendonasi"
                />
              </div>

              <!-- Email -->
              <div class="mt-4 flex items-center">
                <label
                  for="email"
                  class="text-sm font-medium text-gray-700 w-32 inline-block"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  class="mt-1 block flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Masukkan alamat email"
                  v-model="email"
                />
              </div>

              <!-- Donation Amount -->
              <div class="mt-4 flex items-center">
                <label
                  for="donation-amount"
                  class="text-sm font-medium text-gray-700 w-32 inline-block"
                  >Nominal Donasi</label
                >
                <input
                  type="number"
                  id="donation-amount"
                  class="mt-1 block flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Masukkan nominal donasi"
                  v-model="jumlah"
                />
              </div>

              <!-- Payment Method -->
              <div class="mt-4 flex items-center">
                <label
                  for="payment-method"
                  class="text-sm font-medium text-gray-700 w-32 inline-block"
                  >Metode Pembayaran</label
                >
                <select
                  v-model="metode"
                  id="payment-method"
                  class="mt-1 block flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="" disabled>Pilih metode pembayaran</option>
                  <option value="Bank BRI">Bank BRI</option>
                  <option value="Bank Mandiri">Bank Mandiri</option>
                  <option value="Bank BCA">Bank BCA</option>
                  <option value="Bank BNI">Bank BNI</option>
                  <option value="DANA">DANA</option>
                  <option value="OVO">OVO</option>
                </select>
              </div>

              <!-- Proof Image -->
              <div class="mt-4 flex items-center">
                <label
                  for="proof-image"
                  class="text-sm font-medium text-gray-700 w-32 inline-block"
                  >Bukti Donasi</label
                >
                <input
                  type="file"
                  id="proof-image"
                  accept="image/*"
                  @change="getFile"
                />
              </div>
              <br />
              <div align="right">
                <button class="btn btn-success" @click="submit">
                  Tambah donasi
                </button>
              </div>
            </div>
          </td>
        </tr>
        <div class="col-6 mt-20" align="center">
          <img src="@/assets/ilustrasi.jpeg" class="h-auto w-80" alt="" />
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
import axios from "axios";
import { computed } from "vue";
export default {
  props: ["id"],
  data() {
    return {
      showDropDown: false,
      showSide: true,
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

    const bank = ref("");
    const nama = ref("");
    const rekening = ref("");
    const email = ref("");
    const metode = ref("");
    const donatur = ref("");
    const total = ref(0);
    const jumlah = ref("");
    const file = ref(null);

    return {
      bank,
      nama,
      rekening,
      donatur,
      jumlah,
      file,
      email,
      metode,
      total,
      logout,
      user,
    };
  },
  mounted() {
    // this.createCharts();
    axios
      .get("artikel/" + this.$route.params.id)
      .then((response) => {
        this.bank = response.data.bank;
        this.nama = response.data.atas_nama;
        this.rekening = response.data.rekening;
        this.total = "Rp. " + response.data.total_donasi;
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
    submit() {
      const formData = new FormData();
      formData.append("donatur", this.donatur);
      formData.append("jumlah_donasi", this.jumlah);
      formData.append("email_donatur", this.email);
      formData.append("metode_pembayaran", this.metode);
      formData.append("status_donasi", "diterima");
      formData.append(
        "tgl_donasi",
        new Date().toJSON().slice(0, 10).replace(/-/g, "/")
      );
      formData.append("id_artikel", this.$route.params.id);
      if (this.file) {
        formData.append("bukti", this.file);
      }
      axios
        .post("donasi", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          alert("data berhasil ditambahkan");
          location.reload();
        })
        .catch((error) => {
          alert("data gagal ditambahkan");
          location.reload();
          console.log(error.response.data);
        });
    },
    getFile(event) {
      const file = event.target.files[0];
      this.file = file;
    },
  },
};
</script>
<style>
.image-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 200px;
}

.image-container img {
  max-height: 80vh;
  max-width: 100%;
  object-fit: contain;
}
</style>
