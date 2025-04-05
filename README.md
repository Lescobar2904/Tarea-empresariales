# Tarea-empresariales


# Cómo Crear un Repositorio de Git

## 1. Crear el archivo `README.md`

Primero, creamos un archivo `README.md` con el siguiente contenido:

echo "# pruebas" >> README.md
Este comando crea el archivo README.md y le agrega el texto # pruebas.

2. Inicializar el Repositorio Git
A continuación, inicializamos el repositorio Git en el directorio donde estamos trabajando:

git init

Este comando convierte el directorio actual en un repositorio Git local.

3. Añadir el Archivo al Staging Area
Ahora, añadimos el archivo README.md al área de preparación (staging area) para que esté listo para ser confirmado (commit):

git add README.md
4. Hacer el Primer Commit
Una vez que el archivo está en el área de preparación, hacemos el primer commit:

git commit -m "first commit"
Este comando crea un commit con el mensaje "first commit".

5. Crear la Rama Principal
Git crea una rama por defecto llamada master, pero la convención actual es usar main como la rama principal. Cambiamos el nombre de la rama con el siguiente comando:

git branch -M main
6. Añadir el Repositorio Remoto
Luego, vinculamos el repositorio local con un repositorio remoto en GitHub. Reemplaza git@github.com:Lescobar2904/Tarea-empresariales con la URL de tu repositorio en GitHub:

git remote add origin git@github.com:Lescobar2904/Tarea-empresariales
7. Subir los Cambios al Repositorio Remoto
Finalmente, subimos los cambios al repositorio remoto en GitHub con el siguiente comando:

git push -u origin main
Este comando sube el commit local a la rama main en el repositorio remoto y establece la relación para futuros push y pull.

