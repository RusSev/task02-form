export default {
    data() {
        return {
            fields: {
                name: '',
                telephone: '',
                email: '',
                comment: '',
            },
            errors: {},
            success: false,
            loaded: true,
            action: '',
        }
    },

    methods: {

        selectFile(event) {
            this.fields['file'] = event.target.files[0];
        },

        submit() {
            if (this.loaded) {
                this.loaded = false;
                this.success = false;
                this.errors = {};
                axios.post(this.action, this.fields).then(response => {
                    this.fields = {}; //Clear input fields.
                    this.loaded = true;
                    this.success = true;
                }).catch(error => {
                    this.loaded = true;
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};
                    }
                });
            }
        },

    },
}