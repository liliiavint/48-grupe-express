import { Router } from "express";

const apiRouter = Router();


apiRouter.get('/api', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = req.query.c;

    let result;
    
    c === '/' ? result = a / b:
    c === '+' ? result = a + b:
    c === '-' ? result = a - b:
    c === '*' ? result = a * b:
    res.status(400).send('Invalid operation');
   
    res.send(`${a}${c}${b}=${result}`);
});

apiRouter.get('/api/:a1/:c1/:b1', (req, res) => {
    const a1 = parseInt(req.params.a1);
    const b1 = parseInt(req.params.b1);
    const c1 = req.params.c1;

    let result1;

    c1 === '+' ? result1 = a1 + b1:
    c1 === '-' ? result1 = a1 - b1:
    c1 === '*' ? result1 = a1 * b1:
    c1 === '/' ? result1 = a1 / b1:
    res.status(400).send('Invalid operation');
    
    res.send(`${a1}${c1}${b1}=${result1}`);
});

// apiRouter.get('/api......', (req, res) => {
//     res.send('7+5=12');
// });

// apiRouter.get('/api......', (req, res) => {
//     res.send('7-5=12');
// });

// apiRouter.get('/api......', (req, res) => {
//     res.send('7*5=12');
// });

// apiRouter.get('/api......', (req, res) => {
//     res.send('7/5=12');
// });

export { apiRouter };