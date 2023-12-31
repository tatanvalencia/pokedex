<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio.


2. Ejecutar el siguiente comando:
```
  npm install
```


3. Garantizar que tenga instalado Nest CLI.
```
  npm install -g @nestjs/cli
```


4. Levantar la base de datos.
```
  docker-compose up -d
```


5. Clonar el archivo __.env.template__ y renombrar la compia a __.env__



6. Llenar las variables de entorno definidas en el __.env__



7. Ejecutar la aplicación de desarrollo.

```
  npm run start:dev
```



8. Reconstruir la base de datos con la semilla

```
  localhost:3000/api/v2/seed
```


# Prod build

1. Crear el archivo

```
.env.prod
```

2. Asignar las variables de entorno de pdn

3. Crear la nueva imagen

```
  docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

4. Ejecutar comando para reconstruir los contenedores en caso de haberlos eliminado

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

## Stack usado.

* MongoDB.
* Nestjs.