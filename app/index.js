import { app, port } from './server';

app.listen(port, ()=>{
    console.log (`\n🚀  Host on http://localhost:${port}\n`);
})