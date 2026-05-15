import { readFile } from 'node:fs';


readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 