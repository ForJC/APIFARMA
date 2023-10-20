import app from './app.js'
import { PORT } from './config.js'
app.set('port',PORT)
app.set('title',"servidor corriendo!")
 
app.listen(app.get('port'))
console.log(`${app.get('title')} en el puerto http://localhost:${app.get('port')}/`)
