
let user = prompt('enter your value');




// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//        document.write(j);
//     }
//     document.write('<br>')

// }



   
    for (let i = user; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            document.write('*');
        }
        document.write('<br>'); 
    }

    document.write('<br>'); 

    for (let i = 1; i <= user; i++) {
        for (let j = 1; j <= i; j++) {
            document.write('*');
        }
        document.write('<br>'); 
    }
    document.write('<br>'); 


for (let i = 1; i <= user; i++) {
    for (let j = 1; j <= i; j++) {
        document.write('*');
    }
    document.write('<br>');
}
for (let i = user - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write('*');
    }
    document.write('<br>');
}

document.write('<br>');

for (let i = user; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write('*');
    }
    document.write('<br>'); 
}
for (let i = 2; i <= user; i++) {
    for (let j = 1; j <= i; j++) {
        document.write('*');
    }
    document.write('<br>'); 
}