<script>
export default {
    name: "edit-key",
    // *----------------------- P r o p s ----------------------------------------------------------
    props: ["nomenclatorKeyId", "archives", "nomenclator"],
    // *----------------------- D a t a -----------------------------------------------------------
    data() {
        return {
            filledNames: [],
            archive: "",
            fond: "",
            fonds: "",
            folder: "",
            folders: [],
            archive_text: "",
            fond_text: "",
            folder_text: "",
            loadedFonds: false,
            loadedFolders: false,
        }
    },
    // *----------------------- C o m p u t e d ---------------------------------------------------
    computed: {},
    // *----------------------- L i f e   c i r c l e ---------------------------------------------
    created() {},
    mounted() {
        this.setAff()
    },
    // *----------------------- M e t h o d s -----------------------------------------------------
    methods: {
        async setAff() {
            // if (!this.nomenclator.folder) return
            this.archive = this.nomenclator.folder?.fond?.archive?.shortName
            // this.archive = this.archives.find(a => a.shortName == this.nomenclator.folder?.fond?.archive?.shortName)
            await this.loadFonds()
            this.fond = this.nomenclator.folder?.fond?.name
            await this.loadFolders()
            this.folder = this.nomenclator.folder?.name
        },
        async loadFolders(fond) {
            let th = this
            this.loadedFolders = true
            this.folders = await this.fonds.find((item) => {
                if (item.name === th.fond) {
                    return item.folders
                }
            }).folders
        },

        async loadFonds(archive) {
            let th = this
            this.loadedFonds = true
            this.fonds = await this.archives.find((item) => {
                if (item.shortName === th.archive) {
                    return item.fonds
                }
            }).fonds
            // this.archive = this.archive.name;
        },
    },
    // *----------------------- W a t c h ---------------------------------------------------------
    watch: {},
}
</script>