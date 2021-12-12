
// Test import of styles
import '@/styles/index.scss'
import { Header } from '../src/js/components/header';
import { Footer } from './js/components/footer';
import { Wrapper } from './js/components/wrapper';
import { initStore } from './js/store';

const app = document.querySelector('#root');

app.append(Header(), Wrapper(), Footer());

initStore();
