<template>
  <div class="page-wrapper p-t-45 p-b-50 bg-[#FFEFD5]">
    <div class="wrapper wrapper--w790">
      <div class="card card-5">
        <div class="card-heading bg-green-600">
          <h2 class="title">Tambah Informasi bencana</h2>
        </div>
        <div class="card-body">
          <form>
            <div class="form-row">
              <div class="name">Judul</div>
              <div class="value">
                <div class="input-group">
                  <input class="input--style-5" type="text" v-model="judul" />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="name">Kategori</div>
              <div class="value">
                <div class="input-group">
                  <input
                    class="input--style-5"
                    type="text"
                    v-model="kategori"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="name">Konten</div>
              <div class="value">
                <div class="input-group">
                  <textarea
                    class="input--style-5"
                    type="text"
                    v-model="konten"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="name">Bank</div>
              <div class="value">
                <div class="input-group">
                  <input class="input--style-5" type="text" v-model="bank" />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="name">Atas Nama</div>
              <div class="value">
                <div class="input-group">
                  <input class="input--style-5" type="text" v-model="nama" />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="name">No Rekening</div>
              <div class="value">
                <div class="input-group">
                  <input
                    class="input--style-5"
                    type="text"
                    v-model="rekening"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="name">Gambar</div>
              <div class="value">
                <div class="input-group">
                  <input type="file" @change="getFile" accept="image/*" />
                </div>
              </div>
            </div>
          </form>
          <div>
            <button class="btn btn-success" @click="submit">Ubah data</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  props: ["id"],
  setup() {
    const judul = ref("");
    const konten = ref("");
    const kategori = ref("");
    const bank = ref("");
    const nama = ref("");
    const rekening = ref("");
    const file = ref(null);
    return {
      judul,
      konten,
      kategori,
      bank,
      nama,
      rekening,
      file,
    };
  },
  mounted() {
    axios
      .get("artikel/" + this.$route.params.id)
      .then((response) => {
        this.judul = response.data.judul_artikel;
        this.konten = response.data.konten;
        this.kategori = response.data.kategori;
        this.bank = response.data.bank;
        this.nama = response.data.atas_nama;
        this.rekening = response.data.rekening;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
  methods: {
    submit() {
      const formData = new FormData();
      formData.append("_method", "put");
      formData.append("judul_artikel", this.judul);
      formData.append("konten", this.konten);
      formData.append("kategori", this.kategori);
      formData.append("bank", this.bank);
      formData.append("atas_nama", this.nama);
      formData.append("rekening", this.rekening);
      if (this.file) {
        formData.append("image", this.file);
      }
      axios
        .post("artikel/" + this.$route.params.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          alert("data berhasil diubah");
          location.reload();
        })
        .catch((error) => {
          alert("data gagal diubah");
          //   location.reload();
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
@import "@/assets/css/form.css";
</style>
