import { PageTemplate } from "../lib/PageTemplate.js";

class PageCalc extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'Calc';
        this.page = 'calc';
    }

    main() {
        return `
            <main>
                <section class="container py-5">
                    <h1 class="display-5 fw-bold">Calc page</h1>
                </section>
                <section class="container py-5">
                    <form class="calc-form">
                        <div class="form-row">
                            <input id="first_number" type="text" value="0" required>
                            <span>+</span>
                            <input id="second_number" type="text" value="0" required>
                            <span>=</span>
                            <span id="result"></span>
                        </div>
                        <div class="form-row">
                            <button type="submit">Calc</button>
                        </div>
                    </form>
                </section>
            </main>`;
    }

    scripts() {
        return `<script src="/js/calc.js" type="module" defer></script>`;
    }
}

export { PageCalc };