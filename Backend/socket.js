// const socketIo = require('socket.io')


// let io;

// function initializeSocket(server) {
//   io = socketIo(server, {
//     cors: {
//       origin: "*",
//       methods: ['GET', 'POST']
//     }
//   });

//   io.on('connection', (socket) => {
//     console.log(`Client connected : ${socket.id}`);

//     socket.on('disconnect', () => {
//       console.log(`Client disconnected: ${socket.id}`);
//     });
//   })

// }

// function sendMessageToSocketId(socketId, message) {
//   if (io) {
//     io.to(socketId).emit('message', message);
//   } else {
//     console.log('socket.io not initialized')
//   }


// }

// module.exports = { initializeSocket, sendMessageToSocketId }




const { Server } = require("socket.io");

let io;

function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`🟢 Client connected: ${socket.id}`);

    socket.on("message", (data) => {
      console.log(`📩 Message from client: ${data}`);
      socket.emit("message", `Server received: ${data}`);
    });

    socket.on("disconnect", () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });
  });
}

module.exports = { initializeSocket };
