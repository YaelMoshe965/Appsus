{/* <img src="img/homepage.jpg" /> */ }

export default {
    template: `
        <section class="home-page">
            <div class="home-all-content">
                <h2 class="home-title">Meet Your New Email & Books Apps</h2>

                <p class="home-content">
                    Welcome to the <span class="inline-logo"><span class="logo-first">App</span><span class="logo-second">sus</span></span> email client
                </p>

                <p class="home-content">
                    Email Client was never been smoother as the one you gonna see now.
                    <br>
                    Get ready to a new email ERA
                </p>

                <div class="apps">
                    <router-link :to="{path: '/book'}" class="btn-app">
                        <i class="fas fa-book"></i>
                        Books
                    </router-link>
                    <router-link :to="{path: '/email'}" class="btn-app">
                        <i class="fas fa-envelope"></i>
                        Email
                    </router-link>
                </div>
            </div>
        </section>
    `,
}