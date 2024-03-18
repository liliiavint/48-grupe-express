import { Router } from "express";
import { PageHome } from '../pages/PageHome.js';
import { PageAbout } from '../pages/PageAbout.js';
import { PageServicesList } from '../pages/PageServicesList.js';
import { PageServiceInner } from '../pages/PageServiceInner.js';
import { PageSignin } from '../pages/PageSignin.js';
import { PageCart } from '../pages/PageCart.js';
import { Page404 } from '../pages/Page404.js';
import { PageCalc } from "../pages/PageCalc.js";

const router = Router();

router.get('/', (req, res) => {
    const page = new PageHome();
    res.send(page.render());
});

router.get('/about', (req, res) => {
    const page = new PageAbout();
    res.send(page.render());
});

router.get('/services', (req, res) => {
    const page = new PageServicesList();
    res.send(page.render());
});

router.get('/services/:serviceId', (req, res) => {
    const page = new PageServiceInner(req.params);
    res.send(page.render());
});

router.get('/sign-in', (req, res) => {
    const page = new PageSignin();
    res.send(page.render());
});

router.get('/calc', (req, res) => {
    const page = new PageCalc();
    res.send(page.render());
});

router.get('/cart', (req, res) => {
    const page = new PageCart();
    res.send(page.render());
});

router.use((req, res, next) => {
    const page = new Page404();
    res.status(404).send(page.render());
});

export { router };