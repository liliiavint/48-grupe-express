import { Router } from "express";

const apiRouter = Router();

apiRouter.get('/api', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = req.query.c;

    let result;
    c === '+' ? result = a + b: 
    c === '-' ? result = a - b:  
    c === '*' ? result = a * b:
    c === '/' ? result = a / b:
    res.status(400).send('Invalid operation');
    res.send(`${a}${c}${b}=${result}`);
        
  
  

    
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