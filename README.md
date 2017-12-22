# Kratoapp
Krono Application

La implementacion basica de la aplicacion consiste en 2 vistas:
  - Vista de ofertas del dia 
  - Vista recordatorio de toma de medicinas
  
## Funcionalidades del recordador
  
 Se manejo el recordador mediante alerts (debido a la problematica de android sdk para emular localNotifications) para poder
 utilizar el recordador se debe seleccionar una medidica a recordar (especificando nombre y hora de la primera toma, en hora militar)
 posteriormente se debe agregar al Kratox (Nombre del recordador de la aplicacion) posteriormente al clickear sobre el fab inferior
 kratox le recordara la hora de la proxima toma de la pastilla segun tu hora actual.
 
 ## Ejemplo de la funcionalidad recordatorio
 
     (Caso 1)
     
     hora inicio del medicamente: 13 (Hora militar)
     hora actual: 12
     hora a senalar la proxima toma: 17
     
     (Caso 2)
     
     hora inicio del medicamente: 13 (Hora militar)
     hora actual: 18
     hora a senalar la proxima toma: 21

## Sobre las validaciones

La aplicacion no cuenta con las validaciones correspondientes para ser robusta ante cualquier accion no valida del usuario,
Sin embargo las mismas se implementaran posteriormente, debido que el tiempo limite de entrega de la prueba tecnica era hasta el dia
21/12/2017 11:59 pm. (Estoy consciente de lo importante que son las validaciones, sin embargo no cuestiono mi capacidad de implementarlas
por lo que implico una cuestion de tiempo para adquirir el conocimiento)
