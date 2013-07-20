var arDrone = require('ar-drone');
var client  = arDrone.createClient();

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  process.stdout.write('data: ' + chunk + "\n");

// // takeoff mapped to s
//   if (chunk == 's') {
//     //console.log('captured s')
//     client.takeoff();
//     console.log('taking off!');
//   }

// // land when you press 'd'
//   if (chunk == 'd') {
//     client.stop();
//     client.land();
//     console.log('down');
//   }

//   if (chunk == '\u001b[B') {
//     client.back(0.5)
//   }

//   if (chunk == '\u0003') {
//     console.log('exiting');
//     process.exit();
//   }

  switch (chunk) {
    // take off when s is pressed
    case 's':
      client.takeoff();
      console.log('take off!!');
      break;
    // stop and lane when d is pressed
    case 'd':
      client.stop();
      client.land();
      console.log('landing...');
      break;
    case 'a':
      client.stop();
      console.log('stopping');
      break;
    case 'g':
      client.stop();
      client.up(0.3);
      break;
    case 'v':
      client.stop();
      client.down(0.3);
      break;
    // move back when down is pressed
    case '\u001b[B':
      client.stop();
      client.back(0.3);
      console.log('moving back');
      break;
    //up
    case '\u001b[A':
      client.stop();
      client.front(0.3);
      console.log('moving foward');
      break;
    //right
    case '\u001b[C':
      client.stop();
      client.right(0.3);
      console.log('moving right');
      break;
    //left
    case '\u001b[D':
      client.stop();
      client.left(0.3);
      console.log('moving left');
      break;
    case 'f':
      client.stop();
      client.animate('flipLeft', 15);
      break;
    case '\u0003':
      console.log('exiting');
      process.exit();
      break;
  }
});