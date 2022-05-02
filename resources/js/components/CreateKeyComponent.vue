<script>
export default {
  name: "create-key",
  // *----------------------- P r o p s ----------------------------------------------------------
  props: ["archives"],
  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
      keyUsers: [],
      images: [],
      archive: "",
      fond: "",
      fonds: "",
      folders: [],
      archive_text: "",
      fond_text: "",
      folder_text: "",
      loadedFonds: false,
      loadedFolders: false,
    };
  },
  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {},
  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {},
  // *----------------------- M e t h o d s -----------------------------------------------------
  methods: {
    addKeyUser() {
      this.keyUsers.push({
        id: "",
        name: "",
        isMainUser: "",
      });
    },

    deleteKeyUser(index) {
      this.keyUsers.splice(index, 1);
    },

    addImage() {
      this.images.push({
        id: "",
      });
    },

    deleteImage(index) {
      this.images.splice(index, 1);
    },

    async loadFolders(fond) {
      let th = this;
      this.loadedFolders = true;
      this.folders = await this.fonds.find((item) => {
        if (item.name === th.fond) {
          return item.folders;
        }
      }).folders;
    },

    async loadFonds(archive) {
      let th = this;
      this.loadedFonds = true;
      this.fonds = await this.archives.find((item) => {
        if (item.name === th.archive) {
          return item.fonds;
        }
      }).fonds;
      // this.archive = this.archive.name;
    },
  },
  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {},
};
</script>