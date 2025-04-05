function agregarTarea() {
  const input = document.getElementById('tareaInput');
  const texto = input.value.trim();

  if (texto === '') return;

  const li = document.createElement('li');
  li.textContent = texto;

  li.onclick = function () {
    li.classList.toggle('hecho');
  };

  document.getElementById('listaTareas').appendChild(li);
  input.value = '';
}

