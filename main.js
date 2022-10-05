import { fizzbuzzRange} from "./lib/fizzbuzz";

/**
 * Colocar el FizzBuzz en su sitio
 */
function setFizzbuzz() {
  const fizzbuzzList = document.querySelector('#fizzbuzz ul');
  fizzbuzzList.innerHTML = fizzbuzzRange(1,100).map( x => `<li>${x}</li>`).join('');
}

setFizzbuzz()