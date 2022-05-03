fetch("https://api.adviceslip.com/advice?")
.then((resposta) => resposta.json())
.then((data) => {console.log(data.slip.advice)
 document.getElementById("t").innerHTML = data.slip.advice
});




  

