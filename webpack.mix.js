const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('src/assets/js/min.js', 'public/js')
    .sass('src/assets/sass/min.sass', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .setPublicPath('public');