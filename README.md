# Alexis
https://adzinetskatsiaryna.github.io/Alexis/dist/index#
Сайт Alexis сверстан по psd макету, который можно посмотреть 
по адресу http://psd-html-css.ru/templates/alexis-psd-shablon-odnostranichnogo-sayta
При написании использованы технологии CSS Flexbox и CSS Grid Layout. Локально подключены шрифты Google Fonts. 
Использованы изобрвжения в формате jpg, png, svg.
Проект состоит из папок: 
- основной папки app, которая используется для разработки, в ней будет хранится код;
- dist в ней хранятся оптимизированные файлы преднознченные для продакшена;
- node_modules.
Сайт сосотоит из header, footer, 13 секций - Home, About-us, Our Focus, Video, Portfolio, Our-team, Stats, Work-steps, Pricing, 
Testimonials, Select Us, Our Blog, Сontact.
Так же можно перйти на страницу Blog сверстанную с использованием фреймворка Bootstrap. 
Некоторые секции написаны при помощи БЭМ.
Для создания проета был использован сборщик проектов Gulp. 
Перед установкой Gulp вам нужно установить Node.js - https://nodejs.org/en/, После установки Node.js запустите командную консоль. 
Сначала gulp надо установить глобально. npm install gulp -g - введите в командной строке. Далее необходимо создать папку с проектом и в консоли
выполнить в этой папке инициализацию проекта введя - npm init. Далее слеедуйте инструкциям в консоли и вы заполняйте информацию о проекте:
название, версию, описание, имя автора и остальные данные, которые можно оставить значениями по-умолчанию, просто нажимая Yes.
В результате этого в папке проекта появится новый файл package.json. Далее устанавливаем плагины через npm instal + "название плагина",
пишем таски в папке gulpfile.js. Плагины и задачи используемые в проекте: 
gulp-sass - компилирует Sass в CSS
- gulp-watch - следит за всеми файлами html, js, scss;
- Browser Sync - обновляет браузер при любых изменениях в файлах;
- gulp-concat и gulp-uglify - конкатенация (объединение) и минификация файлов js, scss, scc;
- gulp-rename - переименовывает файлы в файлы min.;
- del - очищает папку dist от всех сгенерированных файлов;
- gulp-autoprefixer - сканирует CSS файлы, и автоматически проставляет префиксы к css свойствам
- gulp build  создает папку dist. В эту папку попадают все оптимизированные и скомпилированные файлы.
Также установлены normalize.css и slick-carousel через командную строку - npm install --save normalize.css  и npm install slick-carousel
