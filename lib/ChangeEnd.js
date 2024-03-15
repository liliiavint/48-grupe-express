function ChangeEnd(word) {
    if (typeof word !== 'string') {
        return "Klaida, iveskite tikreine zodzio.";
    }

    if (/\d/.test(word)) {
        return "Klaida: įvestyje yra skaitinių simbolių!";
    
    }else if(word.endsWith('as')){
        return word.slice(0, -2) + 'e';
    }else if(word.endsWith('is')){
        return word.slice(0, -2) + 'ie';
    }else if(word.endsWith('ys')){
        return word.slice(0, -2) + 'y';
    }else if(word.endsWith('ė')){
        return word.slice(0, -1) + 'e' ;
    }else if(word.endsWith('us')){
        return word.slice(0, -2) + 'au';
    }else if(word.endsWith('uo')){
        return word.slice(0, -2) + 'ienie';
    }else{
        return word; 
        }
            
}

export { ChangeEnd };

