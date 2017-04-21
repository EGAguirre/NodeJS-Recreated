(function(){
  const doc = document;
  let aricle img = doc.querySelector("div")

  article img.addEventListener("click",function(){
    let imgclass = article img.className;
    if(imgclass == "circle"){
      article img.className = "rectangle";

    }
    else{
      article img.className = "circle";

    }
  });
