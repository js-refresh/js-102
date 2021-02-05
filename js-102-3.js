let size = 5, i, j;

function printBox(width, height) {
    let char = ' + ';
    let emptySpace = '  ';
    for (i=1; i<=height; i++) {
        if (i=1 || i == height) {
            console.log(char.repeat(width)) 
        }
        else {
        console.log(char + emptySpace.repeat(width-2)+ char);
        }
    }
}
printBox(4)