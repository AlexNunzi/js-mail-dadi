const mailDbList = ['mario.rossi@gmail.com', 'paolo.bianchi@gmail.com', 'enzo.ferrari@gmail.com', 'steve.jobs@gmail.com'];

const mailInput = prompt('Inserisci la tua mail per accedere');

let validation = false;

for(i= 0; i < mailDbList.length; i++){
    if(mailDbList[i] == mailInput.toLowerCase()){
        console.log("La mail che hai inserito è stata validata correttamente");
        validation = true;
        i = mailDbList.length;
    }
}

if (!validation){
    console.log('La mail che hai inserito non è presente nel nostro database');
}