import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { enviromentsComponent } from './source/concepts/01-enviroments';
import { callbacksComponent } from './source/concepts/02-callbacks';
import { promiseComponent } from './source/concepts/03-promises';
import { promiseRaceComponent } from './source/concepts/04-promise-race';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`

const element = document.querySelector('.card');

//callbacksComponent(element);
//promiseComponent(element);
promiseRaceComponent(element);
