// Imports de biblioteca
const bodyParser = require("body-parser") // biblioteca que instalamos
const express = require("express") // biblioteca que instalamos
const app = express() // criação do objeto apartir da instância de expresss

app.use(express.static('.')) // criar o servidor
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json()) // Middleware para ler dados do corpo da requisição(formulários)
const multer = require("multer") // Middleware para lidar com upload de arquivos

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, "./upload")
    },
    filename: function(req, file, callback){
        callback(null, '${Date.now()}_${file.originalname}')
    }
}) // Rota que recebe um arquivo 

const upload = multer({storage }).single('arquivo')
// para salvar o arquivo no destino correto

app.post('/upload', (req, res) =>{
    
})