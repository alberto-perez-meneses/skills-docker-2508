# Git Cheatsheet

## Flujo Profesional
### Inicialización y configuración
```bash
git init                # Inicializa un repositorio Git
git add <archivo>       # Agrega archivos al área de preparación
git commit -m "mensaje" # Crea un commit con un mensaje descriptivo
git push origin <rama>  # Sube los cambios al repositorio remoto
git pull origin <rama>  # Descarga y fusiona cambios del repositorio remoto
```

## Manejo de Ramas
### Crear y gestionar ramas
```bash
git branch <nombre_rama>       # Crea una nueva rama
git checkout <nombre_rama>     # Cambia a una rama existente
git merge <rama_fuente>        # Fusiona una rama en la rama actual
git rebase <rama_base>         # Reorganiza commits sobre otra rama
```

### Solución de conflictos
1. Edita los archivos en conflicto.
2. Usa `git add <archivo>` para marcar los conflictos resueltos.
3. Finaliza con `git commit`.

## Estrategias de Colaboración
### Pull Request y Fork
1. **Fork**: Crea una copia del repositorio en tu cuenta.
2. **Clona** tu fork: `git clone <url_fork>`.
3. Crea una rama, realiza cambios y súbelos.
4. Abre un Pull Request desde tu fork al repositorio original.

### Revisiones
- Usa comentarios en los Pull Requests para sugerir cambios.
- Acepta o solicita cambios antes de fusionar.

## Herramientas Adicionales
### Ignorar archivos
```bash
# .gitignore
*.log
node_modules/
.env
```

### Historial y cambios
```bash
git log                  # Muestra el historial de commits
git stash                # Guarda cambios no confirmados temporalmente
git stash pop            # Restaura los cambios guardados
git revert <commit_hash> # Revierte un commit específico
```

## Buenas Prácticas de Commits
- Usa mensajes claros y descriptivos.
- Realiza commits pequeños y frecuentes.
- Sigue una convención de mensajes como [Conventional Commits](https://www.conventionalcommits.org/).

## Repositorios en GitHub/GitLab
### Configuración y control de cambios
1. Crea un repositorio en GitHub/GitLab.
2. Conéctalo con `git remote add origin <url>`.
3. Usa `git push` y `git pull` para sincronizar cambios.
4. Protege ramas principales con reglas de revisión.


## Eliminar Commits
### (Reescribe Historia - ¡Usar con Cuidado!)

| Comando              | Riesgo                                   | Uso Recomendado                                      |
|----------------------|------------------------------------------|-----------------------------------------------------|
| `git reset --hard`   | Alto - Pérdida permanente de cambios     | Solo en commits locales no compartidos             |
| `git revert`         | Bajo - Seguro para trabajo colaborativo | Cuando los commits ya fueron pusheados             |
| `git checkout -- .`  | Moderado - Descarta todos los cambios    | Verificar cambios importantes primero               |



```bash
# Eliminar último commit pero mantener cambios
git reset --soft HEAD~1

# Eliminar último commit y descartar cambios
git reset --hard HEAD~1

# Eliminar varios commits
git reset --hard HEAD~3
```

### Casos de Uso Comunes
```bash
# Caso 1: Descargar cambios y descartar los propios
git fetch origin
git reset --hard origin/main

# Caso 2: Deshacer múltiples commits sin perder cambios
git reset --soft HEAD~3