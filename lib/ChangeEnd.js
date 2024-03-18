function ChangeEnd(word) {
    if (typeof word !== 'string') {
        return "Klaida, iveskite tikreine zodzio.";
    }

    if (/\d/.test(word)) {
        return "Klaida: įvestyje yra skaitinių simbolių!";
    
    }else if(word.endsWith('as')){
        return word.slice(0, -2) + 'ai';
    }else if(word.endsWith('is')){
        return word.slice(0, -2) + 'i';
    }else if(word.endsWith('ė')){
        return word.slice(0, -1) + 'e' ;
    }else if(word.endsWith('ius')){
        return word.slice(0, -3) + 'iau';
    }else if(word.endsWith('jus')){
        return word.slice(0, -2) + 'jau';
    }else{
        return word; 
        }
            
}

export { ChangeEnd };
