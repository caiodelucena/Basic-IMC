const form = document.querySelector('#formulario');

form.addEventListener('submit', function(evento){
  evento.preventDefault();

  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');

  const peso = +inputPeso.value;
  const altura = +inputAltura.value;

  if (!peso){
    setResultado('Peso inválido', false);
    return;
  } else if (!altura){
    setResultado('Peso inválido', false);
    return;
  } 

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  
  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true)
});

function getImc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc.toFixed(2);
}

function getNivelImc(imc){
  const nivelImc = [
    'Abaixo do peso',
    'Peso normal', 
    'Sobrepeso',
    'Obesidade I',
    'Obesidade II', 
    'Obesidade III' 
  ];

  if (imc < 18.5){
    return nivelImc[0];
  } else if(imc >= 18.5 && imc < 25){
    return nivelImc[1];
  } else if(imc >= 25 && imc < 30){
    return nivelImc[2];
  } else if(imc >=30 && imc < 35){
    return nivelImc[3];
  } else if(imc >= 35 && imc < 40){
    return nivelImc[4]
  } else{
    return nivelImc[5]
  }

}

function createP(){
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '' ;

  const p = createP();

  if(isValid){
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('erro');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);

}