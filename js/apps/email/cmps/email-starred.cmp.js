export default {
    template: `
        <div class="email-starred">
            <i @click="setStar" class="not-starred far fa-star" v-if="!isStarred"></i>
            <i @click="setStar" class="starred fas fa-star" v-else></i>
        </div>
    `,

    props: ['isStarred'],

    methods: {
        setStar() {
            this.$emit('starred');
        }
    },
}
