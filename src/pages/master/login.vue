<template>
  <div class="bg-[#FFEFD5] h-screen align-items-center flex flex-wrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card mt-5">
            <div class="card-header">
              <h1 class="text-center text-2xl">Login</h1>
            </div>
            <div class="card-body" :align="'left'">
              <form>
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
                <br />
              </form>
              <div :align="'center'">
                <button
                  @click="submit"
                  class="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-5 mb-2 border-b-4 border-orange-700 hover:border-orange-400 rounded"
                >
                  Login
                </button>
                <br />
                <router-link
                  to="/register"
                  style="text-decoration: underline; color: #f78a0d"
                  >Register</router-link
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
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "login_page",
  setup() {
    const store = useStore();
    const email = ref("");
    const router = useRouter();
    const password = ref("");

    return {
      router,
      email,
      password,
      store,
    };
  },
  methods: {
    submit() {
      const formData = new FormData();
      formData.append("email", this.email);
      formData.append("password", this.password);

      axios
        .post("user/login", formData)
        .then((response) => {
          this.store.dispatch("login", response.data);
          alert("berhasil login");
          if (response.data.role == "admin") {
            this.router.push("/home_admin");
          } else {
            this.router.push("/");
          }
        })
        .catch((error) => {
          alert("Login gagal - cek kembali email dan password anda");
          console.log(error.response.data);
        });
    },
  },
};
</script>
