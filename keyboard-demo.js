process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log("ASdf");

process.stdin.on('data', function(chunk) {
  process.stdout.write('data: ' + chunk + "\n");

  // ctrl-c character
  if (chunk === '\u0003') {
    console.log('graceful exit');
    process.exit();
  }
});