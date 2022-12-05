 
let n = prompt('Podaj pierwszą cyfrę');
let h = prompt('Podaj drugą cyfrę');


let b = parseInt(n);
let c = parseInt(h);
let suma =(b + c);
let roznica =(b-c);
let mnozenie =(b*c);

function sprawdz_n(suma, roznica, mnozenie){
if (suma < 0 || roznica < 0 || mnozenie < 0){
console.log(" Nieprawidłowy wynik")
} else{
    console.log("Wynik dodawania wynosi ", suma);
    console.log("Wynik odejmowania wynosi ", roznica);
    console.log("Wynik mnożenia wynosi ", mnozenie);
      
}
}

sprawdz_n(suma, roznica, mnozenie);
 console.log(suma);
 console.log(roznica);
 console.log(mnozenie);




