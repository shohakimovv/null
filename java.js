function array(string) {
    if (string == '' || -1) {
        console.log("null");
    }
    return string.slice(1, -1);
}
console.log(array(''));
console.log(array('3 4'));
console.log(array('4  9  6'));
console.log(array('e  r  t  y  n'));