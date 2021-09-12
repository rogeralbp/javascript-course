function getRamdon(){
    return Math.random();
}

const getRamdonArrowFunction = () =>   Math.random();

console.log('Normal Function ' + getRamdon());
console.log('Arrow Function ' + getRamdonArrowFunction());