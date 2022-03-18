import '@riotjs/hot-reload';
import {component} from 'riot';
import App from './app.riot';
import './scss/app.scss';

component(App)(document.getElementById('root'), {
    name: null
})
