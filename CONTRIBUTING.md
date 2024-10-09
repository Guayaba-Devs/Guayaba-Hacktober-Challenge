## Instrucciones para contribuir al Guayaba Hacktober Challenge

¡Gracias por tu interés en contribuir a nuestro proyecto! Aquí te explicamos cómo puedes participar en Hacktoberfest con nosotros. Sigue estos pasos para contribuir correctamente:

### 1. Haz un Fork del repositorio :fork_and_knife:
* Ve al repositorio oficial de Guayaba Hacktober Challenge.
* Haz clic en el botón Fork que está en la esquina superior derecha. Esto creará una copia del repositorio en tu cuenta de GitHub.

### 2. Clona el repositorio de tu Fork :open_file_folder:
En tu terminal, clona tu fork del repositorio a tu máquina local:

```bash
git clone [https://github.com/TU_USUARIO/Guayaba-Hacktober-Challenge.git](https://github.com/TU_USUARIO/Guayaba-Hacktober-Challenge.git)
```
Reemplaza `TU_USUARIO` con tu nombre de usuario en GitHub.

### 3. Crea una nueva rama :rocket:
Antes de empezar a hacer cambios, crea una nueva rama para tu contribución:

```bash
cd Guayaba-Hacktober-Challenge
git checkout -b feature/add-footer
```
Nombra tu rama de forma descriptiva para el cambio que harás, como `feature/add-footer`.

### 4. Haz tus cambios :wrench:
Realiza las modificaciones necesarias en el código o documentación. Si no estás seguro de por dónde empezar, revisa los issues en el repositorio para ver tareas pendientes o sugerencias de mejoras.

### 5. Guarda tus cambios y haz un commit :floppy_disk:
Después de hacer tus cambios, asegúrate de guardar todo y hacer un commit:

```bash
git add .
git commit -m "Descripción clara de los cambios realizados"
```
Escribe un mensaje de commit que explique claramente qué cambios hiciste.


### 6. Sincroniza tu fork con el repositorio original :arrows_counterclockwise:
Para asegurarte de que tu fork esté actualizado con los últimos cambios, puedes sincronizarlo con el repositorio original:

```bash
git remote add upstream https://github.com/Guayaba-Devs/Guayaba-Hacktober-Challenge.git
git fetch upstream
git merge upstream/main
```

### 7. Sube tu rama a GitHub :cloud:
Envía tus cambios a tu repositorio en GitHub:

```bash
git push origin feature/add-footer
```

### 8. Abre un Pull Request :twisted_rightwards_arrows:
- Ve a tu repositorio en GitHub y verás un botón que te sugerirá abrir un Pull Request.
- Haz clic en Compare & pull request.
- Completa el formulario con una descripción clara de los cambios que realizaste y por qué deberían fusionarse.
- Haz clic en Create pull request.

### 9. Revisión y feedback :mag_right: :memo:
El equipo de Guayaba Devs revisará tu pull request. Es posible que te pidan realizar algunos ajustes. Una vez que todo esté correcto, ¡tu contribución será aceptada y fusionada!

### ¡Buena suerte! :four_leaf_clover:

Gracias por tu contribución a Guayaba Hacktober Challenge. ¡Te esperamos en la comunidad!