import { fizzbuzzRange } from "./lib/fizzbuzz";

/**
 * Colocar el FizzBuzz en su sitio.
 * No es necesario tocar nada de esta función.
 */
function setFizzbuzz() {
  const fizzbuzzList = document.querySelector('#fizzbuzz ul');
  fizzbuzzList.innerHTML = fizzbuzzRange(1,100).map( x => `<li>${x}</li>`).join('');
}

setFizzbuzz()