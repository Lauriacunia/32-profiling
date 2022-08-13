# 32- Profiling

```
npm i -g artillery@latest
```

- Artillery
  https://www.artillery.io/

- Ver resultados por consola:

```
>artillery quick --count 5 --num 10 http://localhost:3000/primos?num=20
```

- Guardar análisis en un file

```
>artillery quick --count 5 --num 10 --output resultados.txt http://localhost:3000/primos?num=20
```

## Node built-in profiler

- Levantar servidor con --prof

```
>node --prof serverProfiler.js
```

- Guardar análisis con artillery

```
>artillery quick --count 5 --num 10 --output resultados.txt http://localhost:3000/primos-debug
>artillery quick --count 5 --num 10 --output resultados.txt http://localhost:3000/primos-nodebug
```

- Comparar performance en ambos casos
- Pasar log de profiler a txt

```
> node --prof-process  isolate-0x5588650-50607-v8.log > result-prof-debug.txt
```

### Autocannon -> Misma funcionalidad que Artillery

```
>npm i -g autocannon
>npm i -g 0x
```

- levantar servidor

```
>node --prof serverProfiler.js
```

- correr análisis con autocannon (muy pareccido a artillery):

```
>autocannon -d 5 -c 10 "http://localhost:3000/primos-debug"
```

### 0x . Gráfico de flama (ohhh 🔥🔥🔥)

- Levantar server con 0x

```
>0x serverProfiler.js
```

- Correr análisis con autocannon o artillery

```
>autocannon -d 5 -c 10 "http://localhost:3000/primos-debug"
```
