export const addSpaces = (number) => {
    const str = String(number);
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        
        if ((str.length - i - 1) % 3 === 0 && i !== str.length - 1) {
            result += " ";
        }
    }
    
    return result;
}

export const getGenres = (genre) => {
    return genre.map((g, index) => {
        if (genre.length > 1){
             if (index === g.length-1){
                 return g
             }else{
                 return g + ', '
             }
        }else{
             return <>{ g }</>
        }
    })
}

export const firstLetterUppercase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}