







function sum(number: string = ''){
    let result: number = number.toString().split('').map(r => Number(r)).reduce((prev, cur) => prev + cur, 0);
    if(result.toString().length > 1){
        result = sum(result.toString());
    }
    return result;
}






export declare type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
export declare type FindSeries = {
    pattern: string,
    sumof?: Numbers | null | undefined
}
export function findSeries({ pattern, sumof }: FindSeries = { pattern: '', sumof: 1 }){
    const len = pattern.length || 0;
    const occurances = findOccurance(pattern);
    
    if(occurances.length == 0) return [pattern];
    if(occurances.length > 1) throw new Error('Currently we support only one occurance');

    const occur = occurances[0];
    const occurLength = occur.end - occur.start;
    const number = generateNumber(occurLength);
    const possibleNumber = [];

    let replaceNumber;
    while(true){
        replaceNumber = number.next();
        if(replaceNumber.done) break;
        const startString = pattern.substring(0, occur.start);
        const endString = pattern.substring(occur.end, pattern.length);
        const n = `${startString}${replaceNumber.value}${endString}`;
        if(sumof){
            if(sum(n) == sumof)
                possibleNumber.push(n)
        }else{
            possibleNumber.push(n)
        }
    }
    return possibleNumber;
}





function findOccurance(input: string = '', match: string = '*'): ({start: number, end: number})[]{
    const occurances = [];
    
    let start = false;
    let ob = { start: 0, end: 0 };
    for(let i = 0; i < input.length; i++){
        const char = input[i];
        if(char == match && !start){
            start = true;
            ob.start = i;
        }else if ((char != match && start) || (start && i == input.length - 1)) {
            start = false;
            ob.end = i;
            occurances.push({...ob});
            ob = { start: 0, end: 0 };
        }
    }
    return occurances;
}




function* generateNumber(length: number = 10) : Generator<string>{
    let i = -1;
    let number = '';
    do{
        i++;
        number = i.toString().padStart(length, "0");
        if(number.length == length + 1)
            break;
        yield number;
    }while(i.toString().length < length + 1)
}






