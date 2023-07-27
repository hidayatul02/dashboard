<template>
  <div class="bg-[#FFEFD5] h-screen align-items-center flex flex-wrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card mt-5">
            <div class="card-header">
              <h1 class="text-center text-2xl">Register</h1>
            </div>
            <div class="card-body" align="left">
              <form>
                <div class="form-group">
                  <label for="nama" class="px-1 py-3">Nama lengkap</label>
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="nama"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="px-1 py-3">Email</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="px-1 py-3">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="form-group">
                  <label for="gambar" class="px-1 py-3">Gambar</label>
                  <input type="file" @change="getFile" class="form-control" />
                </div>
                <br />
              </form>
              <div align="center">
                <button
                  @click="submit"
                  class="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-5 mb-2 border-b-4 border-orange-700 hover:border-orange-400 rounded"
                >
                  Register
                </button>
                <br />
                <router-link
                  to="/login"
                  style="text-decoration: underline; color: #f78a0d"
                  >Login</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  name: "login_page",
  setup() {
    const email = ref("");
    const name = ref("");
    const password = ref("");
    const file = ref(null);

    return {
      email,
      name,
      password,
      file,
    };
  },
  methods: {
    submit() {
      const formData = new FormData();
      formData.append("email", this.email);
      formData.append("name", this.name);
      formData.append("password", this.password);
      if (this.file) {
        formData.append("gambar", this.file);
      }
      axios
        .post("user", formData, {
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
