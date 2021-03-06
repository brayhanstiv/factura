
const express = require('express')
const cors = require("cors")

const mongoose= require("mongoose")
const app = express()
const port = 3005
const routerFactura = require("./rutas/factura.router")
const routerCliente = require("./rutas/clientes.router")
const routerProductos = require("./rutas/productos.router")
const routerVendedor = require("./rutas/vendedor.router")


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/factura",routerFactura)
app.use("/clientes",routerCliente)
app.use("/productos",routerProductos)
app.use("/vendedor",routerVendedor)


mongoose.connect("mongodb://localhost:27017/factura", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true});
mongoose.connection.on('error', () => {
  console.error(`unable to connect to database`);
});



app.listen(port, () => {
  console.log(`servidor corriendo en np http://localhost:${port}`)
})
