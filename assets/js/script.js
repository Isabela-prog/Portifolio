const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// acionado sempre que o formulário for enviado
// sempre que o botão enviar for clicado
formulario.addEventListener('submit', function(event) {
    
    // não deixa que a pág seja recarregada qd enviar o formulário -> comportamento padrão
    event.preventDefault();
    
    // constante que recebe o id name
    const campoNome = document.querySelector('#name');
    // contante que recebe o id txtNome -> usada para exibir mensagens de erro
    const txtNome = document.querySelector('#txtNome');
    
    // validação do campo name
    if (campoNome.value.length < 3) {
      txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
    //   para o usuário corrigir o name
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }
    
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
  
    if (!campoEmail.value.match(emailRegex)) {
      txtEmail.innerHTML = 'Digite um E-mail válido.';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
  
    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
  
    if (campoSubject.value.length < 5) {
      txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
      campoSubject.focus();
      return;
    }else{
      txtSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');

    window.alert("Formulário Enviado com Sucesso!");
  
    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''

  });