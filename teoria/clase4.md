# Clase 4

### Heroku

![Heroku_logo](https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png)


- [Lenguajes soportados](https://devcenter.heroku.com/categories/language-support)
- [Soporte](https://help.heroku.com/)
- [Precio](https://www.heroku.com/pricing)
- **Documentacion**
  - [Seguridad](https://devcenter.heroku.com/categories/security)
  - [Command Line](https://devcenter.heroku.com/categories/command-line)
  - [Arquitectura](https://devcenter.heroku.com/categories/heroku-architecture)
  - [Deployment](https://devcenter.heroku.com/categories/deployment)
  - [Features](https://devcenter.heroku.com/categories/features)

### Heroku: Uso

**Instalación del Toolbelt**
- En Linux
```
  wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```
- Versiones ejecutables para Windows y OSX
- Es necesario tener instalado previamente Ruby en la máquina


**Login en Heroku**
```
  heroku login
```

**Preparando la Aplicación**
- Ejemplo de Heroku 
```
  git clone https://github.com/heroku/node-js-getting-started.git && cd node-js-getting-started
```

**Crear un proyecto**
- Con un nombre al azar
```
  heroku create
```
- Con nombre propio
```
  heroku create miproyecto
```

**Desplegando nuestro proyecto**
- Nota: Previamente tienes que tener el proyecto gestionado con Git.
```
  git push heroku master
```

**Escalando nuestro proyecto**
- Verificando el número de Dynos
```
  heroku ps
```
- Definiendo el número de Dynos
```
  heroku ps:scale web=1
```

**Abriendo nuestro proyecto**
```
  heroku open
```

**Logs del proyecto**
```
heroku logs --tail
```

**Lanzar el proyecto en local**
```
heroku local web
```

### Heroku: Addons

- [Documentación General](https://devcenter.heroku.com/categories/add-on-documentation)
- [Lista de Addons](https://elements.heroku.com/addons)
  - [Raygun](https://elements.heroku.com/addons/raygun)
    - Informes de error en tiempo real
    - [Documentación para Node](https://devcenter.heroku.com/articles/raygun#using-with-node)
  - [SendGrid](https://elements.heroku.com/addons/sendgrid)
    - Sistema de envio de emails con muchos extras
    - [Documentación para Node](https://devcenter.heroku.com/articles/sendgrid#node-js)
  - [Easy SMS](https://elements.heroku.com/addons/easysms)
    - Envio/Recepción de SMS mundial
    - [Documentación](https://devcenter.heroku.com/articles/easysms)
  - [mLab MongoDB](https://elements.heroku.com/addons/mongolab)
    - MongoDB as a Service
    - [Documentación para Node](https://devcenter.heroku.com/articles/mongolab)
  - [GrapheneDB](https://elements.heroku.com/addons/graphenedb)
    - Neo4j Graph as a Service
    - [Documentación para Node](https://devcenter.heroku.com/articles/graphenedb#using-with-node-js-and-node-neo4j)
  - [ClearDB MySQL](https://elements.heroku.com/addons/cleardb)
    - MySQL
    - [Documentación](https://devcenter.heroku.com/articles/cleardb)
  - [Graph Story](https://elements.heroku.com/addons/graphstory)
    - Enterprise Neo4j Graph Databases as a Service
    - [Documentación](https://devcenter.heroku.com/articles/graphstory)
  - [Heroku Scheduler](https://elements.heroku.com/addons/scheduler)
    - Programador de tareas
    - [Documentación](https://devcenter.heroku.com/articles/scheduler#dyno-hour-costs)
  - [Process Scheduler](https://elements.heroku.com/addons/process-scheduler)
    - Programa el escalamiento de tus *process types* y *dynos* por horas
    - [Documentación](https://devcenter.heroku.com/articles/process-scheduler)
  - [DocRaptor](https://elements.heroku.com/addons/docraptor)
    - Conversor de HTML a PDF. Simple y robusto
    - [Documentación](https://devcenter.heroku.com/articles/docraptor)
  - [Tinfoil Security](https://elements.heroku.com/addons/tinfoilsecurity)
    - Escaner de seguridad
    - [Documentación](https://devcenter.heroku.com/articles/tinfoilsecurity)
  - [Auth0](https://elements.heroku.com/addons/auth0)
    - Gestión de credenciales
    - [Documentación del Addon](https://devcenter.heroku.com/articles/auth0)
    - [Documentación para Node](https://auth0.com/docs/quickstart/webapp/nodejs)
  - [OAuth.io](https://elements.heroku.com/addons/oauthio)
    - Gestión de credenciales. Más de 100 provedores 
    - [Documentación](https://devcenter.heroku.com/articles/oauthio) 
  - [CloudAMQP](https://elements.heroku.com/addons/cloudamqp)
    - RabbitMQ as a Service
    - [Documentación para Node](https://devcenter.heroku.com/articles/cloudamqp#use-with-node-js)
  - [Keen IO](https://elements.heroku.com/addons/keen)
    - Analíticas para desarrolladores
    - [Documentación para Node](https://devcenter.heroku.com/articles/keen#using-with-node)
  - [Bonsai Elasticsearch](https://elements.heroku.com/addons/bonsai)
    - Elasticsearch
    - [Documentación](https://devcenter.heroku.com/articles/bonsai)


### Otros paquetes

**Paquetes de interes global**

- node-inspector 
  - Instalación global.
  - Utilizar `debugger;` para lanzar las herrameintas de depuración del navegador.
  ```
  node-debug server.js
  ```
- nodemon
  - [Documentación](https://github.com/remy/nodemon#nodemon)
  - Relanza la aplicación por cada cambio que relaizemos
  ```
  npm install -g nodemon
  ```  
  ```
  nodemon server.js
  ```
- forever
  - Relanza la aplicación cuando deja de funcionar
  - Opciones adiccionales
  - Muy popular
  - [Docuemntación](https://github.com/foreverjs/forever)
  ```
    forever start/stop server.js
  ```
- pm2
  - Pensada para producción
  - Muchas opciones de configuración
  - Monitorización activa de muchos detalles clave de la aplicación
  - [Documentación](http://pm2.keymetrics.io/)
  ```
    pm2 start/stop server.js
  ```

**Otros**
- [formidable](https://www.npmjs.com/package/formidable)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [mongose](http://mongoosejs.com/)
  - Driver para trabajr con MongoDB
- [node-mysql](https://github.com/felixge/node-mysql)
  - Facilita el trabajo con MySQL
- [Nodemailer](https://github.com/nodemailer/nodemailer)
  - Gestiona facilemnte el envio de e-mails
- [node-validator](https://github.com/chriso/validator.js)
  - Validación y sanitización de cadenas, especialmente pensado para formularios. 

**[Muchos Más (lista)](https://github.com/sindresorhus/awesome-nodejs/)**



### WebSockets

![WS_Sockets](http://fernetjs.com/wp-content/uploads/2012/11/websocket-lifecycle.png)
- Protocolo de comunicación qe se negocia sobre HTTP
- Full-duplex
- Única conexión permanente (Siempre conectado)
- Stream de mensajes
- Contenido en tiempo real
- Orientado a "eventos" (mensajes)
- Baja latencia


**Entendiendo los eventos**

![Sockets](http://cdn.sandsmedia.com/ps/onlineartikel/pspic/picture_file/53/WebSocket4dd23ade6df2a.png)


**Negociación del protocolo WebSocket**

> Para establecer una conexión WebSocket, el cliente manda una petición de negociación WebSocket, y el servidor manda una respuesta de negociación WebSocket, como se puede ver en el siguiente ejemplo:
> [WebSockets en Wikiwand](https://www.wikiwand.com/es/WebSocket)

- Cliente:
```
  GET /demo HTTP/1.1
  Host: example.com
  Connection: Upgrade
  Sec-WebSocket-Key2: 12998 5 Y3 1 .P00
  Sec-WebSocket-Protocol: sample
  Upgrade: WebSocket
  Sec-WebSocket-Key1: 4 @1 46546xW%0l 1 5
  Origin: http://example.com

  ^n:ds[4U
```

- Servidor:
```
  HTTP/1.1 101 WebSocket Protocol Handshake
  Upgrade: WebSocket
  Connection: Upgrade
  Sec-WebSocket-Origin: http://example.com
  Sec-WebSocket-Location: ws://example.com/demo
  Sec-WebSocket-Protocol: sample

  8jKS'y:G*Co,Wxa-
```
> Los 8 bytes con valores numéricos que acompañan a los campos Sec-WebSocket-Key1 y Sec-WebSocket-Key2 son tokens aleatorios que el servidor utilizará para construir un token de 16 bytes al final de la negociación para confirmar que ha leído correctamente la petición de negociación del cliente.


### WS: Nativo

- [Soporte](http://caniuse.com/#search=websocket)
- [Documentación en MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

**Abrir la conexión**
```javascript
var myWebSocket = new WebSocket("ws://www.websockets.org");
```

**Gestión de Eventos**

- Siempre dispondremos del parametro event.
```javascript
myWebSocket.onopen = function() { console.log("Connection open ..."); };
myWebSocket.onmessage = function(evt) { console.log( "Received Message: ", evt.data); };
myWebSocket.onclose = function() { console.log("Connection closed."); };      
```

**Envio de mensajoes**
```javascript
myWebSocket.send("Hello WebSockets!");
```

**Cerrar la conexión**
```javascript
myWebSocket.close();
```

### WS: Sockets.io
![Sockets](https://camo.githubusercontent.com/b74075d1deca125ad36f8fded4055f896d9f2108/687474703a2f2f666f746f732e73756265666f746f732e636f6d2f32376135653361633065393936666134663063643066613239386635356366636f2e706e67)

Caracrerísticas:
- Fácil
- Soporte a navegadores obsoletos (Fallback)
- Popular
- Extraordinariamente simple

Eventos reservados:
- socket.on("connect", cb)
- socket.on("disconnect", cb)
- socket.on("error", cb) *Solo cliente*
- socket.on("message", cb)

**Abrir la conexión**
```javascript
  var socket = io("url");
```

**Gestión de Eventos**
```javascript
  socket.on('channel', function(data) { 
    console.log( "Received Message: ", data); 
  });
```

**Envio de mensajoes**
```javascript
socket.emit('channel', data);
```

**Cerrar la conexión**
```javascript
socket.disconnect() 
socket.close(); // Si quieres reabrir. -> socket.connect();
```


### WS: Sockets.io (Server Side)

**Con HTTP directamente:**
```javascript
  var server = require('http').createServer();
  var io = require('socket.io')(server);
  io.on('connection', function(socket){
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
  });
  server.listen(3000);
```

**Con Express:**
```javascript
  var app = require('express')();
  var server = require('http').createServer(app);
  var io = require('socket.io')(server);
  io.on('connection', function(){ /* … */ });
  server.listen(3000);
```

**Recursos**
- [Socket.io en Github](https://github.com/socketio/socket.io)
- [Socket.io - Express 3/4](http://socket.io/docs/#using-with-express-3/4)


### Nativo vs. Librerías

- [Differences between socket.io and websockets en Stackoverflow](http://stackoverflow.com/a/38558531)
- [WebSocket and Socket.IO by DWD](https://davidwalsh.name/websocket)
- [An Introduction to WebSockets by Matt West](http://blog.teamtreehouse.com/an-introduction-to-websockets)

### Ejemplos

- [IT Pulse](https://github.com/UlisesGascon/twitter-sentiments)
- [Curratelo](https://github.com/UlisesGascon/curratelo)




### Ejercicios

**1 -** Partiendo de este [proyecto](https://github.com/losmescaleros/twitter-sentiments) realiza mejoras de contenido y visuales
- Objetivos:
  - Fork y lanzamiento en el entorno de desarrollo 
  - Mejorar la interfaz (estáticos)
  - Cambiar los hashtags y mejorar el sistema de analisis usando librerias
- Objetivos opcionales:
  - Refactoriza y evoluciona este repositorio para crear una aplicación que analices Tweets con un contenido especifico.

```javascript
  // Tu solución
```