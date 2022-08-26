const controles = document.getElementById('controles');
const texto = document.querySelector('#texto');
const btn = document.querySelector('.btn');
const css = document.querySelector('.css');

controles.addEventListener('change', handleChange);

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  //console.log(name, value);
  handleStyle[name](value);
  showCss();
}

const handleStyle = {
  element: btn,
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
  cursor(value) {
    this.element.style.cursor = value;
  },
};

function showCss() {
  css.innerHTML =
    '<span>' + btn.style.cssText.split('; ').join('; </span><span>');
  console.log(btn.style);
}
