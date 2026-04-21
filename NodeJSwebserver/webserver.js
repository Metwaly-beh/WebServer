const net = require('net');



//create "server" when it recieves data put it in buffer "temp memory" and turn it into a string and print
const server= net.createServer((socket)=>{
    socket.on("data",(buffer)=>{
        const requestString =  buffer.toString("utf-8")

        console.log(requestString);
    })
})


server.listen(9999,()=> console.log("listening"))