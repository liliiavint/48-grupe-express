import { PageTemplate } from "../lib/PageTemplate.js";
    class PageSignin extends PageTemplate {
        constructor() {
            super();
            this.pageTitle = 'Sign in';
            this.page = 'sign-in';
        }
        main() {
            return `
            
                <section class="container py-5">
                    <main class="">
                        <form>
                        <img class="mb-4" src="./img/bootstrap-logo.svg" alt="" width="72" height="57">
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating" bis_skin_checked="1">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating" bis_skin_checked="1">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="form-check text-start my-3" bis_skin_checked="1">
                            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                            </label>
                        </div>
                        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
                        </form>
                    </main>
                <section/>
           
        
        
       `;
        }
    }


export { PageSignin };