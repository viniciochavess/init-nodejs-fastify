import app from './app'
import { env } from './dotenv'

app.listen({
  host: '0.0.0.0',
  port: env.PORT
}).then(()=>{
    console.log('🟢 ' + 'http://localhost:'+env.PORT)
})