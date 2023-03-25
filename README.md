# mitosDjango

proyecto de venta de libros , con carrito de compras, login, ingreso de libros (mitos), comentarios y valoración de libros. 
## ** ¿Que se utilizo en este proyecto?
Django reactjs y mongoDB.

Arquitectura rest, djongo para conectar mongodb y django

## nota

al borrar un libro por ejemplo todos los comentarios se borrarían automaticamente al tener modelos relacionados entre si, lo mismo pasaria con usuarios (pero no borraria libros solo comentarios)

para instalar las dependencias de reactjs

npm install 

para instalar los requerimientos de django:

pip install -r requirements.txt 

## Mongodb info

mongodb compass 1.36.1

MongoDB 5.0.15 Enterprise

## dependencias de ReactJS
axios : 1.2.0

bootstrap : 5.2.3

jwt-decode : 3.1.2

react : 18.2.0

react-bootstrap: 2.6.0

react-dom: 18.2.0

react-router-dom: 6.4.4

sweetalert2: 11.7.3

## dependencias de Django
Django==4.1.2

django-cors-headers==3.13.0

djangorestframework==3.14.0

djongo==1.3.6

pymongo==3.12.1

Pillow==9.3.0

djangorestframework_simplejwt==5.2.2

PyJWT==2.6.0

## problema encontrado
al parecer djongo esta desactualizado, y utilizar los permisos de usuarios por defecto de django es imposible.

## Proyecto
-pagina principal

<img width="782" alt="principal" src="https://user-images.githubusercontent.com/71986954/227701026-45574201-d1ac-4737-a5d9-58ab79eee7ce.PNG">

-ingresar mitos

<img width="399" alt="ingresar mitos" src="https://user-images.githubusercontent.com/71986954/227701060-a904493a-e930-4d8d-a235-7c325f1a5fe2.PNG">

-login

<img width="814" alt="login" src="https://user-images.githubusercontent.com/71986954/227701073-ba4f8baa-65db-4835-9d21-c69f60d2c77d.PNG">

-mas info

<img width="761" alt="mas info" src="https://user-images.githubusercontent.com/71986954/227701085-d9de052c-03e1-43c0-a12e-9d7545e00659.PNG">

-ingresar comentarios y vista de comentarios

<img width="646" alt="comentarios" src="https://user-images.githubusercontent.com/71986954/227701095-b06401a2-e91b-4f91-bc1b-2a4b923bb17c.PNG">


-alertas ejemplo:

<img width="447" alt="comentario2" src="https://user-images.githubusercontent.com/71986954/227701115-6bbbb7a3-ce69-43c9-8577-b9e990d535cc.PNG">

