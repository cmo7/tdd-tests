import { fizzbuzzRange} from "./lib/fizzbuzz";
import { text2morse, morse2text } from "./lib/morse";

/**
 * Colocar el FizzBuzz en su sitio
 */
function setFizzbuzz() {
  const fizzbuzzList = document.querySelector('#fizzbuzz ul');
  fizzbuzzList.innerHTML = fizzbuzzRange(1,100).map( x => `<li>${x}</li>`).join('');
}

setFizzbuzz();

document.getElementById('text2morse').addEventListener('click', () => {
  const text = document.getElementById('text').value;
  const morse = text2morse(text);
  document.getElementById('morse').value = morse;
})

document.getElementById('morse2text').addEventListener('click', () => {
  const morse = document.getElementById('morse').value;
  const text = morse2text(morse);
  document.getElementById('text').value = text;
})