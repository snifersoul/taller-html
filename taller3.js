function calIMC(Altura,Peso){
    const imc = Peso / (Altura ** 2);
    return imc.toFixed(3);
}


function IMC(){
    const z = document.getElementById("Nom").value;
    const y = document.getElementById("txt02").value;
    const x= document.getElementById("txt01").value;
    const imc=calIMC(y,x);
    
    if(z==""){
        document.getElementById("Nom").focus();
    }if(x==""){
        document.getElementById("txt01").focus();
    }else{
    if(y==""){
        document.getElementById("txt02").focus();
    }else{
        if(isNaN(x)){
            
            document.getElementById("txt01").value="";
            document.getElementById("txt01").focus()
        }else{
            if(isNaN(y)){
                
            document.getElementById("txt02").value="";
            document.getElementById("txt02").focus()

            }else{if(imc<18.5){
                
            document.write("Hola "+z+"tu imc es: "+imc+" estás en Bajo de peso.");
        }else{
            if(imc<24.9){
                document.write("Hola "+z+"tu imc es: "+imc+" estás en Peso Normal");
            }else{
                if(imc<29.9){
                    document.write("Hola "+z+"tu imc es: "+imc+" estás en Sobre Peso");
                }else{
                    if(imc<34.9){
                        document.write("Hola "+z+"tu imc es: "+imc+" estás en Obesidad 1");
                    }else{
                        if(imc<39.5){
                            document.write("Hola "+z+"tu imc es: "+imc+" estás en Obesidad 2");
                        }else{
                            document.write("Hola "+z+"tu imc es: "+imc+" estás en Obesidad 3 o Morbida");
                        }
                    }
                }
            }
        
        }
        }
        }
    }
    }
}
    