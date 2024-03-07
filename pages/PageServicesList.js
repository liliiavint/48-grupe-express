import { servicesData } from "../data/servicesData.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class PageServicesList extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'Services';
        this.page = 'services';
    }

    main() {
        let listHTML = '';

        for (const service of servicesData) {
            listHTML += `
                <div class="col">
                    <div class="card shadow-sm">
                        <img class="card-img-top" style="height: 150px; object-fit: cover;" src="/img/bootstrap-themes.png" alt="Service image">
                        <div class="card-body">
                            <h3>${service.title}</h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="${service.href}" class="btn btn-primary my-2">Read more</a>
                                </div>
                                <small class="text-body-secondary">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>`;
        }

        return `
            <main>
                <section class="py-5 text-center container">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">Services we provide</h1>
                            <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p>
                                <a href="#" class="btn btn-primary my-2">Main call to action</a>
                                <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                            </p>
                        </div>
                    </div>
                </section>

                <div class="album py-5 bg-body-tertiary">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            ${listHTML}
                        </div>
                    </div>
                </div>

            </main>`;
    }
}

export { PageServicesList };