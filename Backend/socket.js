// // const socketIo = require('socket.io')
// // const userModel = require('./models/user.model');
// // const captainModel = require('./models/captain.model')


// // let io;

// // function initializeSocket(server) {
// //   io = socketIo(server, {
// //     cors: {
// //       origin: "*",
// //       methods: ['GET', 'POST']
// //     }
// //   });

// //   io.on('connection', (socket) => {
// //     console.log(`Client connected : ${socket.id}`);

// //     socket.on('join', async (data) => {
// //       const { userId, userType } = data;

// //       if (userType === 'user') {
// //         await userModel.findByIdAndUpdate(userId, {
// //           socketId: socket.id
// //         });
// //       } else if (userType === 'captain') {
// //         await captainModel.findByIdAndUpdate(userId, {
// //           socketId: socket.id
// //         })
// //       }
// //     });

// //     socket.on('disconnect', () => {
// //       console.log(`Client disconnected: ${socket.id}`);
// //     });
// //   })

// // }

// // function sendMessageToSocketId(socketId, message) {
// //   if (io) {
// //     io.to(socketId).emit('message', message);
// //   } else {
// //     console.log('socket.io not initialized')
// //   }


// // }

// // module.exports = { initializeSocket, sendMessageToSocketId }


// const socketIo = require('socket.io');
// const userModel = require('./models/user.model');
// const captainModel = require('./models/captain.model');

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

//     socket.on('join', async (data) => {
//       if (data) {
//         const { userId, userType } = data;
//         console.log(`User ${userId} joined as ${userType}`)

//         if (userType === 'user') {
//           await userModel.findByIdAndUpdate(userId, {
//             socketId: socket.id
//           });
//         } else if (userType === 'captain') {
//           console.log(`Updating captain socket ID: ${socket.id}`);
//           await captainModel.findByIdAndUpdate(userId, {
//             socketId: socket.id
//           });
//         }
//       } else {
//         console.error("Received null or undefined data in 'join' event");
//       }
//     });

//     socket.on('update-location-captain', async (data) => {
//       const { userId, location } = data;

//       if (!location || !location.ltd || !location.lng) {
//         return socket.emit('error', { message: 'Inavlid localion' })
//       }
//       console.log(`${location}`)
//       await captainModel.findByIdAndUpdate(userId, {
//         locationltd: location.ltd,
//         locationlng: location.lng
//       });
//     })

//     socket.on('disconnect', () => {
//       console.log(`Client disconnected: ${socket.id}`);
//     });
//   });
// }

// function sendMessageToSocketId(socketId, message) {
//   if (io) {
//     io.to(socketId).emit('message', message);
//   } else {
//     console.log('socket.io not initialized');
//   }
// }

// module.exports = { initializeSocket, sendMessageToSocketId };

const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);


    socket.on('join', async (data) => {
      const { userId, userType } = data;

      if (userType === 'user') {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
      } else if (userType === 'captain') {
        await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });


    socket.on('update-location-captain', async (data) => {
      const { userId, location } = data;

      if (!location || !location.ltd || !location.lng) {
        return socket.emit('error', { message: 'Invalid location data' });
      }

      await captainModel.findByIdAndUpdate(userId, {
        location: {
          ltd: location.ltd,
          lng: location.lng
        }
      });
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}

const sendMessageToSocketId = (socketId, messageObject) => {

  console.log(messageObject);

  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.log('Socket.io not initialized.');
  }
}

module.exports = { initializeSocket, sendMessageToSocketId };