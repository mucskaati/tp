<script>
export default {
    name: "edit-key",
    // *----------------------- P r o p s ----------------------------------------------------------
    props: ["preSubmittedKeyUsers", "allKeyUsers", "nomenclatorKeyId"],
    // *----------------------- D a t a -----------------------------------------------------------
    data() {
        return {
            keyUsers: [],
            allKeyUsersModified: [],
            images: [],
            keyUserAddUrl: `${window._api_base_url}/nomenclatorKeys/${this.nomenclatorKeyId}/addKeyUsers`,
            keyUserRemoveUrl: `${window._api_base_url}/nomenclatorKeys/${this.nomenclatorKeyId}/removeKeyUsers`,
            filledNames: [],
            test: null,
        }
    },
    // *----------------------- C o m p u t e d ---------------------------------------------------
    computed: {},
    // *----------------------- L i f e   c i r c l e ---------------------------------------------
    created() {},
    mounted() {
        this.addPreSubmittedKeyUsers()
        this.addAllKeyUsersModified = this.allKeyUsers
    },
    // *----------------------- M e t h o d s -----------------------------------------------------
    methods: {
        addKeyUser() {
            this.keyUsers.push({
                id: "",
                name: "",
                isMainUser: false,
                persisted: false,
            })
        },

        async storeKeyUser(keyUser) {
            if (!keyUser.name && !keyUser.id) return
            let userData = {
                isMainUser: keyUser.isMainUser,
            }
            keyUser.name
                ? (userData.name = keyUser.name)
                : (userData.id = keyUser.id)

            userData = [userData]

            const response = await fetch(this.keyUserAddUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": 'application/json',
                    'authorization': window._token,
                },
                body: JSON.stringify(userData),
            })

            if (response.ok) {
                keyUser.persisted = true
            }
        },

        async deleteKeyUser(keyUser, index) {
            if (!keyUser.name && !keyUser.id) return
            let userData = {}
            keyUser.name
                ? (userData.name = keyUser.name)
                : (userData.id = keyUser.id)

            userData = [userData]

            const response = await fetch(this.keyUserRemoveUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": 'application/json',
                    'authorization': window._token,
                },
                body: JSON.stringify(userData),
            })

            if (response.ok) {
                this.keyUsers.splice(index, 1)
            }            
        },

        addImage() {
            this.images.push({
                id: "",
            })
        },

        deleteImage(index) {
            this.images.splice(index, 1)
        },

        addPreSubmittedKeyUsers() {
            if (!this.preSubmittedKeyUsers) return
            const pskus = JSON.parse(this.preSubmittedKeyUsers)
            pskus.forEach((psku) => {
                this.keyUsers.push({
                    id: psku.id,
                    name: null,
                    isMainUser:
                        psku.isMainUser === 1 ||
                        psku.isMainUser === "1" ||
                        psku.isMainUser === true,
                    persisted: true,
                })
            })
        },
        nameFilled(event, key) {
            console.log(event, key)
        },
    },
    // *----------------------- W a t c h ---------------------------------------------------------
    watch: {},
}
</script>