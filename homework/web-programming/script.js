hljs.highlightAll();
hljs.configure({ignoreUnescapedHTML: true});

const header = document.querySelector('header');
const headerTitle = document.querySelector('header span');
const article = document.querySelector('article');
const codeblocks = document.querySelectorAll('code');

const unfoldHeader = (codeblock) => {
  foldHeader();
  let titleElement = codeblock.parentElement;
  while (titleElement.tagName !== 'H2') titleElement = titleElement.previousElementSibling;
  const code = codeblock.innerText;
  const title = titleElement.innerText;
  const { consoleElement, controller } = createConsole();
  headerTitle.innerText = title;
  article.appendChild(createCodeblock(code));
  article.appendChild(createExecutor(code, controller));
  article.appendChild(consoleElement);
  header.classList.add('active');
  header.focus();
}

const foldHeader = () => {
  header.classList.remove('active');
  article.innerHTML = '';
  headerTitle.innerText = '예외 및 예외 처리';
}

const createCodeblock = (code) => {
  const codeblock = document.createElement('pre');
  codeblock.innerHTML = `<code class="language-javascript">${code}</code>`;
  hljs.highlightElement(codeblock);
  return codeblock;
}

const createConsole = () => {
  const consoleElement = document.createElement('textarea');
  consoleElement.readOnly = true;
  const log = (...message) => consoleElement.value += message.join(' ') + '\n';
  const clear = () => consoleElement.value = '';
  return { consoleElement, controller: { log, clear } };
}

const createExecutor = (code, controller) => {
  const button = document.createElement('button');
  button.innerText = '실행';
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log = controller.log;
    controller.clear();
    try {
      eval(`(function() { ${code} })();`);
    } catch (e) {
      controller.log(e);
    }
  });
  return button;
}

window.addEventListener('keydown', (e) => e.key === 'Escape' && foldHeader());
header.addEventListener('click', ((e) => (e.target === header || e.target === headerTitle) && foldHeader()));
codeblocks.forEach((codeblock) => codeblock.addEventListener('contextmenu', (e) => { e.preventDefault(); unfoldHeader(codeblock); }));