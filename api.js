function geraMensagem(){
fetch("https://api.adviceslip.com/advice?")
.then((resposta) => resposta.json())
.then((data) => {console.log(data.slip.advice)

 //document.getElementById("id").innerHTML = data.slip.id
 document.getElementById("texto").innerHTML = data.slip.advice
});

};




  

