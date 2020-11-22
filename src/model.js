import image from './assets/wave.jpg';
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

const text = `Wonderful stories about JS <a href="https://habr.com/ru/hub/javascript/">here</a>`;

export const model = [

    new TitleBlock('JS website constructor', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),

    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '700px',
            height: 'auto'
        },
        alt: 'image'
    }),

    new ColumnsBlock([
        'Pure JS application',
        'S.O.L.I.D. principles',
        'JavaScript is awesome !!!'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),

    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'text-align': 'center',
            'font-weight': 'bold'
        }
    })
];