function formatTimeAsText(n) {
    const text = [
        'nulis',
        'viena',
        'dvi',
        'trys',
        'keturios',
        'penkios',
        'sesios',
        'septynios',
        'astuonios',
        'devynios',
        'desimt',
        'vienuolika',
        'dvylika',
        'trylika',
        'keturiolika',
        'penkiolika',
        'sesiolika',
        'septyniolika',
        'astuoniolika',
        'deviniolika',
        'dvidesimt',
        'dvidesimt viena',
        'dvidesimt dvi',
        'dvidesimt trys',
        'dvidesimt keturios',
        'dvidesimt penkios',
        'dvidesimt sesios',
        'dvidesimt septynios',
        'dvidesimt astuonios',
        'dvidesimt devynios',
        'trisdesimt',
        'trisdesimt viena',
        'trisdesimt dvi',
        'trisdesimt trys',
        'trisdesimt keturios',
        'trisdesimt penkios',
        'trisdesimt sesios',
        'trisdesimt septynios',
        'trisdesimt astuonios',
        'trisdesimt devynios',
        'keturiasdesimt',
        'keturiasdesimt viena',
        'keturiasdesimt dvi',
        'keturiasdesimt trys',
        'keturiasdesimt keturios',
        'keturiasdesimt penkios',
        'keturiasdesimt sesios',
        'keturiasdesimt septynios',
        'keturiasdesimt astuonios',
        'keturiasdesimt devynios',
        'penkiasdesimt',
        'penkiasdesimt viena',
        'penkiasdesimt dvi',
        'penkiasdesimt trys',
        'penkiasdesimt keturios',
        'penkiasdesimt penkios',
        'penkiasdesimt sesios',
        'penkiasdesimt septynios',
        'penkiasdesimt astuonios',
        'penkiasdesimt devynios',
    ];
    return text[n];
}

function timeValueTitle(n, word) {
    if (word === 'h') {
        if (n == 1 || n === 21) {
            return 'valanda';
        } else if (n > 9 && n < 20) {
            return 'valandu';
        } else if (n === 0) {
            return 'valandu';
        } else {
            return 'valandos';
        }
    }

    if (word === 'm') {
        if (n % 10 === 0) {
            return 'minuciu';
        } else if (n > 10 && n < 20) {
            return 'minuciu';
        } else if (n % 10 === 1) {
            return 'minute';
        } else {
            return 'minutes'
        }
    }

    if (word === 's') {
        if (n % 10 === 0) {
            return 'sekundziu';
        } else if (n > 10 && n < 20) {
            return 'sekundziu';
        } else if (n % 10 === 1) {
            return 'sekunde';
        } else {
            return 'sekundes'
        }
    }

    return '';
}

export { formatTimeAsText, timeValueTitle };