# Tarea-empresariales



/*
 * Explicación de comandos Git para crear un nuevo repositorio
 * Este código DM explica paso a paso el proceso de creación de un repo
 */

/proc/explicar_git()
    // Paso 1: Crear archivo README.md
    usr << "\n=== PASO 1: Crear archivo README.md ==="
    usr << "El comando 'echo \"# pruebas\" >> README.md' hace lo siguiente:"
    usr << "- 'echo' imprime texto en la terminal"
    usr << "- '>>' redirige la salida a un archivo (lo crea si no existe)"
    usr << "- Resultado: Crea un archivo README.md con el contenido '# pruebas'"
    usr << "Este archivo es el punto de entrada/documentación de tu proyecto"
    
    // Paso 2: Inicializar repositorio Git
    usr << "\n=== PASO 2: Inicializar repositorio ==="
    usr << "Comando: 'git init'"
    usr << "- Crea un nuevo repositorio Git local en el directorio actual"
    usr << "- Genera un subdirectorio .git con toda la configuración necesaria"
    usr << "- Ahora Git puede empezar a trackear cambios en este directorio"
    
    // Paso 3: Añadir archivo al staging area
    usr << "\n=== PASO 3: Añadir archivo al staging ==="
    usr << "Comando: 'git add README.md'"
    usr << "- Añade el archivo README.md al 'staging area'"
    usr << "- El staging area es donde preparas los cambios para el próximo commit"
    usr << "- Puedes usar 'git add .' para añadir todos los archivos modificados"
    
    // Paso 4: Hacer primer commit
    usr << "\n=== PASO 4: Hacer primer commit ==="
    usr << "Comando: 'git commit -m \"first commit\"'"
    usr << "- Crea un nuevo commit con los cambios en el staging area"
    usr << "- '-m' permite especificar el mensaje del commit directamente"
    usr << "- Los commits son snapshots de tu proyecto en un momento dado"
    
    // Paso 5: Renombrar branch principal
    usr << "\n=== PASO 5: Renombrar branch principal ==="
    usr << "Comando: 'git branch -M main'"
    usr << "- Renombra la branch principal de 'master' a 'main'"
    usr << "- Esto sigue las nuevas convenciones de la industria"
    usr << "- Opcional si ya estás en la branch 'main'"
    
    // Paso 6: Añadir repositorio remoto
    usr << "\n=== PASO 6: Configurar repositorio remoto ==="
    usr << "Comando: 'git remote add origin git@github.com:Lescobar2904/Tarea-empresariales'"
    usr << "- 'origin' es un alias para la URL del repositorio remoto"
    usr << "- La URL puede ser HTTPS o SSH (como en este ejemplo)"
    usr << "- Esto conecta tu repo local con el repo en GitHub"
    
    // Paso 7: Hacer primer push
    usr << "\n=== PASO 7: Subir cambios al remoto ==="
    usr << "Comando: 'git push -u origin main'"
    usr << "- Envía tus commits locales al repositorio remoto"
    usr << "- '-u' establece 'origin main' como upstream por defecto"
    usr << "- En futuros pushes, podrás usar solo 'git push'"
    
    // Resumen final
    usr << "\n=== RESUMEN DEL FLUJO DE TRABAJO ==="
    usr << "1. Crear/editar archivos en tu proyecto"
    usr << "2. 'git add' para preparar cambios"
    usr << "3. 'git commit' para guardar cambios localmente"
    usr << "4. 'git push' para subir cambios al remoto"
    usr << "\n¡Repositorio creado y configurado con éxito!"

// Ejecutar la explicación
/explicar_git()