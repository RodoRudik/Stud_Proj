import dotenv from 'dotenv'; // 'dotenv' es una librería que carga variables de entorno desde un archivo .env

// Cargar variables de entorno desde .env
dotenv.config(); // Carga las variables de entorno desde el archivo .env 'config()' es una función de 'dotenv's

// 2. IMPORTS DE MÓDULOS
import express from 'express';
import axios from 'axios';
import path from 'path'; // path es una librería que ayuda a manipular rutas de archivos

// CAMBIO: En ESM(ECMAScript Modules), __dirname no existe. Hay que recrearlo manualmente
import { fileURLToPath } from 'url';// fileURLToPath es una función de 'url' que convierte una URL en un path de archivo

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);

// Obtener el directorio del archivo actual
const __dirname = path.dirname(__filename);

// 3. CONFIGURACIÓN DE EXPRESS
const app = express();
const PORT = process.env.PORT || 3000;

// Motor de plantillas EJS
app.set('view engine', 'ejs');// 'set()' es una función de 'express' que configura el motor de plantillas
app.set('views', path.join(__dirname, 'views'));// '.join()' es una función de 'path' que unir rutas de archivos en este caso los dos paths '/views' y '/public'

// Middleware para leer datos de formularios (POST)
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS, JS, imágenes) desde /public
app.use(express.static(path.join(__dirname, 'public')));

// 4. DATOS COMPARTIDOS
// Lista de monedas disponibles en el dropdown
const currencies = [
  { code: 'USD', name: 'Dólar Estadounidense' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'Libra Esterlina' },
  { code: 'JPY', name: 'Yen Japonés' },
  { code: 'CAD', name: 'Dólar Canadiense' },
  { code: 'AUD', name: 'Dólar Australiano' },
  { code: 'MXN', name: 'Peso Mexicano' },
  { code: 'BRL', name: 'Real Brasileño' },
  { code: 'ARS', name: 'Peso Argentino' },
  { code: 'CLP', name: 'Peso Chileno' },
  { code: 'CUP', name: 'Peso Cubano' },
  { code: 'RUB', name: 'Rublo Ruso' }
];

// 5. RUTA GET / (Pantalla Inicial)
app.get('/', (req, res) => {
  res.render('index', {
    currencies: currencies,
    from: 'USD',
    to: 'EUR',
    amount: 100,
    result: null,
    rate: null,
    lastUpdate: null,
    error: null
  });
});


// 6. RUTA POST /convert (Lógica de Conversión)
app.post('/convert', async (req, res) => {
  try {
    // Extraer datos del formulario
    const { from, to, amount } = req.body;
    
    // Validar que amount sea un número válido y mayor a 0
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      throw new Error('El monto debe ser un número mayor a 0');
    }

    // Construir URL de la API
    const apiKey = process.env.EXCHANGE_API_KEY;
    // 🔍 DEBUG TEMPORAL (eliminar después)
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;
    console.log('🔑 API Key cargada:', apiKey);
    console.log('🔑 Longitud:', apiKey ? apiKey.length : 'undefined');
    console.log('🌐 URL completa:', url);

    // Hacer petición a la API con Axios
    const response = await axios.get(url);
    
    // Verificar que la respuesta sea exitosa
    if (response.data.result !== 'success') {
      throw new Error('Error al obtener las tasas de cambio');
    }

    // Extraer la tasa de la moneda destino
    const rate = response.data.conversion_rates[to];
    if (!rate) {
      throw new Error(`No se encontró tasa para ${to}`);
    }

    // Calcular resultado
    const result = (amountNum * rate).toFixed(2);// toFixed() es una función de 'Number' que convierte un número a un string con un número fijo de decimales
    
    // Fecha de actualización
    const lastUpdate = new Date(response.data.time_last_update_unix * 1000)
      .toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

    // Renderizar vista con todos los datos
    res.render('index', {
      currencies: currencies,
      from: from,
      to: to,
      amount: amountNum,
      result: result,
      rate: rate,
      lastUpdate: lastUpdate,
      error: null
    });

  } catch (error) {
    // Manejo de errores
    console.error('Error en conversión:', error.message);
    
    res.render('index', {
      currencies: currencies,
      from: req.body.from || 'USD',
      to: req.body.to || 'EUR',
      amount: req.body.amount || 100,
      result: null,
      rate: null,
      lastUpdate: null,
      error: error.message || 'Error al procesar la conversión. Intenta nuevamente.'
    });
  }
});


// 7. INICIO DEL SERVIDOR
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});