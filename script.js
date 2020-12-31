function button_click(){
    var image= document.getElementById("image-background")
    var res = document.getElementById("resultado")
    if(image.style.display ==='none' ){
        console.log('ok')
        res.innerHTML="<img src='img/lampada-acesa.png' >"  
      }else {
          console.log('[ERRO]')
      } 
}