<script>
export default {
  name: "edit-key",
  // *----------------------- P r o p s ----------------------------------------------------------
  props: ["preSubmittedKeyUsers", "allKeyUsers"],
  // *----------------------- D a t a -----------------------------------------------------------
  data() {
    return {
      keyUsers: [],
      allKeyUsersModified: [],
      images: [],
    };
  },
  // *----------------------- C o m p u t e d ---------------------------------------------------
  computed: {},
  // *----------------------- L i f e   c i r c l e ---------------------------------------------
  created() {},
  mounted() {
    this.addPreSubmittedKeyUsers();
    this.addAllKeyUsersModified = this.allKeyUsers;
  },
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
      //TODO: API request to delete user
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

    addPreSubmittedKeyUsers() {
      if (!this.preSubmittedKeyUsers) return;
      const pskus = JSON.parse(this.preSubmittedKeyUsers);
      pskus.forEach((psku) => {
        this.keyUsers.push({
          id: psku.id,
          name: psku.name,
          isMainUser:
            psku.isMainUser == 1 ||
            psku.isMainUser == "1" ||
            psku.isMainUser == true,
        });
      });
    },
  },
  // *----------------------- W a t c h ---------------------------------------------------------
  watch: {},
};
</script>