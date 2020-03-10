process.stdout.write("hello from spinner1.js... \rheyyy\n");
let timeout = 0;
const interval = 200;
for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    process.stdout.write('\r|          ');
  }, timeout += interval);
  setTimeout(() => {
    process.stdout.write('\r/          ');
  }, timeout += interval);
  setTimeout(() => {
    process.stdout.write('\r-          ');
  }, timeout += interval);
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\          ');
  }, timeout += interval);
}
setTimeout(() => {
  process.stdout.write('\n');
}, timeout += interval);