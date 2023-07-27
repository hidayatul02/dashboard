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
            <button class="btn btn-success" @click="submit">Tambah data</button>
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
  methods: {
    submit() {
      const formData = new FormData();
      formData.append("judul_artikel", this.judul);
      formData.append("konten", this.konten);
      formData.append("kategori", this.kategori);
      formData.append("bank", this.bank);
      formData.append("atas_nama", this.nama);
      formData.append("rekening", this.rekening);
      formData.append(
        "tgl_terbit",
        new Date().toJSON().slice(0, 10).replace(/-/g, "/")
      );
      if (this.file) {
        formData.append("image", this.file);
      }

      axios
        .post("artikel", formData, {
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

<style>
@import "@/assets/css/form.css";
</style>
