export default {
    template: `
        <router-link :to="'/email/' + email.id">
            <section class="email-preview">
                {{email.subject}}
            </section>
        </router-link>
    `,

    props: ['email']
}