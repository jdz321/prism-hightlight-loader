const prism = require('prismjs');
const cheerio = require('cheerio');

const id = a => a;

module.exports = function loader(content) {
  content = content || '';
  const $ = cheerio.load(content);
  $('code').replaceWith((i, e) => {
    const $e = $(e);
    const text = $e.text();
    const klass = $e.attr('class') || '';
    let lang = klass.split('lang-').filter(id);
    lang = lang && lang[0] || 'js';

    if (!prism.languages[lang]) {
      require(`prismjs/components/prism-${lang}.js`);
    }

    return `<code class="language-${lang}">${prism.highlight(text, prism.languages[lang])}</code>`
  })
  return $.html();
};

module.exports.seperable = true;
