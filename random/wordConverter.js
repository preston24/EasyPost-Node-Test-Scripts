let words = "poor";
words = words.replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()]/g,"")

function emotify(){
  let w = words.split("");
  for(i=0;i<w.length;i++){
    if(w[i] !== " "){
    w[i] = ":cs-"+w[i]+":"
  }else{
    w[i] = ":cs-s-sp:"
  }
  }
  console.log(w.join(""));
}

emotify()