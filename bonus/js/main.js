const userMailDom = document.querySelector('.userMail');
const buttonDom = document.querySelector('.button');
const resultDom = document.querySelector('.result');

const mailDbList = ['mario.rossi@gmail.com', 'paolo.bianchi@gmail.com', 'enzo.ferrari@gmail.com', 'steve.jobs@gmail.com'];

// const mailInput = prompt('Inserisci la tua mail per accedere');

buttonDom.addEventListener('click', function(){
    let validation = false;

    for(i= 0; i < mailDbList.length; i++){
        if(mailDbList[i] == (userMailDom.value).toLowerCase()){
            console.log("La mail che hai inserito è stata validata correttamente");
            resultDom.innerHTML = "La mail che hai inserito è stata validata correttamente";
            validation = true;
            i = mailDbList.length;
        }
    }

    if (!validation){
        console.log('La mail che hai inserito non è presente nel nostro database');
        resultDom.innerHTML = "La mail che hai inserito non è presente nel nostro database";
    }
}
)

