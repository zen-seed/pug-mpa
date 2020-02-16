import './index.less';
import template from './index.pug';
import imgUrl from '../static/pug.png';

function addImage() {
    let img = document.createElement('img');
    img.src = imgUrl;
    document.body.appendChild(img);
}

addImage();
