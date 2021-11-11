// Ett objekt vid namn torsten. Objekt kan innehålla olika typer av data
let torsten = {
    ålder: 12,
    cm: 160,
    skor: {
        sko1: 'gymnastikskor',
        sko2: 'kängor'
    }
};

console.log(torsten.skor.sko2);

// En Array med olika typer av data
let djur = ['katt', 'hund', {ras: 'kanariefågel', färg: 'blå'}, torsten];

console.log('djur.length', djur.length);

//Så här kommer man åt datan i objektet i arrayen
console.log(djur[2].färg);

//lägg till en sträng i array  djur
djur.push('råtta');

//Lägga till ett råttobjekt
djur.push({djur: 'råtta', färg:'brun'});

for (let i = 0; i < djur.length; i++) {
    if(djur[i] === 'katt'){
        console.log('djur[i] === katt');
    }
    else {
        
    }


    if(djur[i] === prompt('välj djur')){
        console.log('finns');
    }
    else {
        
    }
    console.log(djur[i]);
}


function per () {
    console.log('funktionen per')
}