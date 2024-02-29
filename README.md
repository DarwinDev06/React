# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Triqui 
#### _El juego de nuestra infancia_

![N|Solid](https://th.bing.com/th?id=OIP._8rFeN8g8WkE7fuE2QYkawHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2)

El juego Triqui tambien conocido como Tres en raya, juego del gato, Tic Tac Toe, Totito o Tres en Gallo, es un juego de lapiz y papel el cual lo he diseñado para jugarlo en la Web.
Este juego esta diseñado para dos jugadores los cuales deben marcar **X** o **0** segun le corresponda el turno, y gana el primero que logre marcar 3 casillas consecutivas con el mismo simbolo, bien sea de forma horizontal, vertical o diagonal.

A continuacion mostrare todas las posibilidades con las cuales se puede ganar un juego de Triqui:

![N|Solid](https://pybit.es/wp-content/uploads/2021/05/winning-positions.png)

otro caso que puede llegar a ocurrir, es el empate, en el cual no gana ninguno de los dos jugadores, y el tablero se veria de la siguiente manera:

![N|Solid](https://th.bing.com/th/id/OIP.ag6SLLk9lvPGrUB6D99usgAAAA?pid=ImgDet&w=179&h=179&c=7)

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


## Como Jugar 

una vez estes en la pagina te encontraras con la siguiente pantalla:

![pantalla principal](/triky-game/src/assets/Pantalla-principal.PNG)

En este punto ya podras empezar a jugar con un amig@, teniendo en cuenta lo siguiente:

- El primer turno es para **X**
- El turno va cambiando automaticamente cada vez que un jugador halla jugado su turno
- en la parte inferior de tablero se sombrea de tono azul el turno que se esta jugando actualmente
- se debe jugar cada turno hasta que algunos de los dos jugadores gane o el juego quede en empate 

para este ultimo caso, el aplicativo mostrara una ventana donde notificara si algunos de los dos jugadores gano o el juego quedo en empate, esta ventana tiene el siguiente aspecto:

![mostrando ganador](/triky-game/src/assets/Pantalla-mostrar-ganador.PNG)

Como podemos evidenciar, nos muestra quien gano, de igual modo tenemos la opcion de chequar el tablero en caso de que surjan dudas. de la misma manera tenemos la opcion de empezar un nuevo juego dando click en el boton "_Empezar nuevo juego_"

Sin mas que decir que disfruten el juego del Triqui.


## Detalles tecnicos 

Este juego fue creado en **_React.js_** en conjunto con Vite, donde se implementaron diferentes componentes y se implementaron algunos **Hooks** como **_useState, useEfect_** y tambien se utilizo el local storge para el almacenamiento temporal de las partidas.

Para use de este proyecto que aun no esta desplegado, primero deben hacer un **fork** del proyecto y llevarlo a la maquina local, desde alli podran correr el comando desde la terminal:
```sh
 npm run dev
```
y de esta manera podran acceder al proyecto en la web.

