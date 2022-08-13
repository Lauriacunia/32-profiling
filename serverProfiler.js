import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

function listarNumerosPrimos(numero) {
  console.log("Listando numeros primos hasta el numero: " + numero);
  let numerosPrimos = [];
  for (let i = 2; i < numero; i++) {
    console.log(i);
    console.log(esPrimo(i));
    if (esPrimo(i)) {
      numerosPrimos.push(i);
    }
  }
  console.log(numerosPrimos);
  return numerosPrimos;
}
/**reutilizo la funcion de serverArtillery porque lo importante
  es el análisis de carga y no la funcion */
app.use("/primos-debug", (req, res, next) => {
  const limiteSuperior = 10000;
  const numerosPrimos = listarNumerosPrimos(limiteSuperior);
  // en teoría este console.log haria mas lenta la ejecución del servidor
  console.log(numerosPrimos);
  res.json(numerosPrimos);
});

app.use("/primos-nodebug", (req, res, next) => {
  const limiteSuperior = 10000;
  const numerosPrimos = listarNumerosPrimos(limiteSuperior);
  res.json(numerosPrimos);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(
    `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
  )
);
server.on("error", (err) => console.log(err));
