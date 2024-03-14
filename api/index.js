import { Router } from "express";
import { formatTimeNumber } from "../lib/formatTimeNumber.js";
import { formatTimeAsText, timeValueTitle } from "../lib/formatTimeAsText.js";

const apiRouter = Router();

apiRouter.get('/api', (req, res) => {
    return res.send('Sveiki atvyke i API puslapi. Pasirinkite viena is galimu veiksmu: suma, atimtis, daugyba, dalyba');
});

apiRouter.get('/api/math/:veiksmas', (req, res) => {
    const mathFunc = req.params.veiksmas;
    if (mathFunc !== 'suma' && mathFunc !== 'atimtis' && mathFunc !== 'daugyba' && mathFunc !== 'dalyba') {
        return res.send('Norima atlikti funkcija yra neatpazinta');
    }
    return res.send('Norint susumuoti, reikia nurodyti 2 skaicius');
});

apiRouter.get('/api/math/:veiksmas/:pirmas', (req, res) => {
    return res.send('Norint susumuoti, dar truksta vieno skaiciaus');
});

apiRouter.get('/api/math/:veiksmas/:a/:b', (req, res) => {
    const a = +req.params.a;
    const b = +req.params.b;

    if (isNaN(a)) {
        return res.send(`Pirmas parametras nera tikras skaicius`);
    }
    if (isNaN(b)) {
        return res.send(`Antras parametras nera tikras skaicius`);
    }

    const sum = +(a + b).toFixed(10);
    return res.send(`${a}+${b}=${sum}`);
});

// Reikia priimti varda ir pavarde, ir graziname inicialus.
// /api/abbr/chuck/norris => C.N.
apiRouter.get('/api/abbr', (req, res) => {
    return res.status(400).send('Norint pagaminti inicalus reikia nurodyti varda ir pavarde');
});
apiRouter.get('/api/abbr/:name', (req, res) => {
    return res.status(400).send('Norint pagaminti inicalus reikia nurodyti ne tik varda bet ir pavarde');
});
apiRouter.get('/api/abbr/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname.trim();
    const lastname = req.params.lastname.trim();

    if (firstname.length === 0) {
        return res.status(400).send('Vardas negali buti tuscias');
    }
    if (lastname.length === 0) {
        return res.status(400).send('Pavarde negali buti tuscia');
    }

    const abbr = (firstname[0] + '.' + lastname[0] + '.').toUpperCase();
    return res.status(200).send(abbr);
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas: hh:mm:ss
apiRouter.get('/api/time', (req, res) => {
    const d = new Date();
    const h = formatTimeNumber(d.getHours());
    const m = formatTimeNumber(d.getMinutes());
    const s = formatTimeNumber(d.getSeconds());

    const time = `${h}:${m}:${s}`;
    return res.status(200).send(time);
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas tokiu formatu hh:mm:ss, bet visi skaiciai yra zodziai
// pvz.: 10:57:14 => desimt valandu, penkiasdesimt septynios minutes, keturiolika sekundziu
// pasistenkti apgalvoti visas galimas gramatikos situacijas
apiRouter.get('/api/time-as-text', (req, res) => {
    const d = new Date();

    const h = formatTimeAsText(d.getHours());
    const m = formatTimeAsText(d.getMinutes());
    const s = formatTimeAsText(d.getSeconds());

    const ht = timeValueTitle(d.getHours(), 'h');
    const mt = timeValueTitle(d.getMinutes(), 'm');
    const st = timeValueTitle(d.getSeconds(), 's');

    const time = `${h} ${ht}, ${m} ${mt}, ${s} ${st}`;
    return res.status(200).send(time);
});






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


// // Reikia priimti varda ir pavarde, ir graziname inicialus.
// // /api/abbr/chuck/norris => C.N.












// Reikia priimti varda ir pavarde, ir graziname inicialus.
// /api/abbr/chuck/norris => C.N.
apiRouter.get('/abbr', (req, res) => {
    return res.send('Sveiki atvyke i ABBR puslapi. Iveskite prasome Varde ir Pavarde');
});

apiRouter.get('/abbr/:v/:p', (req, res) => {
    const varde = req.params.v;
    const pavarde = req.params.p;
    
    
    return res.send(`${varde[0].toUpperCase()}.${pavarde[0].toUpperCase()}.`);
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas: hh:mm:ss
apiRouter.get('/time', (req, res) => {
    const x = new Date().toLocaleTimeString();
    return res.send(`${x}`);
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas tokiu formatu hh:mm:ss, bet visi skaiciai yra zodziai
// pvz.: 10:57:14 => desimt valandu, penkiasdesimt septynios minutes, keturiolika sekundziu
// pasistenkti apgalvoti visas galimas gramatikos situacijas

apiRouter.get('/time-as-text', (req, res) => {
    return res.send('Sveiki atvyke i time-as-text puslapi. Iveskite prasome laiko');
});
apiRouter.get('/time-as-text/:h/:m/:s', (req, res) => {
    
    function numberName(num) {
        const digitWord = ['nulio', 'pirma', 'antra', 'treča', 'ketvirta', 'penkta', 'šešta', 'septintą', 
            'aštuntą', 'devinta', 'dešimta', 'vienuolikta', 'dvylikta', 'trylikta', 'keturiolikta', 'penkiolikta', 'šešiolikta', 
            'septyniolikta', 'aštuoniolikta', 'devyniolikta', 'dvidešimta', 'dvidešimt pirma', 'dvidešimt antra', 'dvidešimt treča', 
            'dvidešimt keturi', 'dvidešimt penki', 'dvidešimt šeši', 'dvidešimt septyni', 'dvidešimt aštuoni', 'dvidešimt devyni',
            'trisdešimt', 'trisdešimt vienas', 'trisdešimt du', 'trisdešimt trys', 'trisdešimt keturi', 
            'trisdešimt penki', 'trisdešimt šeši', 'trisdešimt septyni', 'trisdešimt aštuoni', 'trisdešimt devyni',
            'keturiasdešimt', 'keturiasdešimt vienas', 'keturiasdešimt du', 'keturiasdešimt trys', 'keturiasdešimt keturi',
            'keturiasdešimt penki', 'keturiasdešimt šeši', 'keturiasdešimt septyni', 'keturiasdešimt aštuoni', 'keturiasdešimt devyni', 'penkiasdešimt',
            'penkiasdešimt vienas', 'penkiasdešimt du', 'penkiasdešimt trys', 'penkiasdešimt keturi', 'penkiasdešimt penki', 'penkiasdešimt šeši', 'penkiasdešimt septyni',
            'penkiasdešimt aštuoni', 'penkiasdešimt devyni'];
          
        const result = [];
    
        for (let i = 0; i < digitWord.length; i++) {
            if(i === parseInt(num)){
                result.push(digitWord[i]);
            }
        }
    
        return result.join(' ');
    }
    
    const hour = numberName(req.params.h);
    const minute = numberName(req.params.m);
    const second = numberName(req.params.s);

    parseInt(req.params.h) < 0 || parseInt(req.params.h) > 24 || parseInt(req.params.m) < 0 || parseInt(req.params.m) > 59 
    || parseInt(req.params.s) < 0 || parseInt(req.params.s) > 59 ? res.send("Iveskite teisingas laikos!"):

    res.send(`${hour} val.: ${minute} min. : ${second} sec.`);
});
export { apiRouter };