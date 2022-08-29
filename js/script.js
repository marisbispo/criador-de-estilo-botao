const controles = document.getElementById('controles');
const texto = document.querySelector('#texto');
const btn = document.querySelector('.btn');
const css = document.querySelector('.css');

controles.addEventListener('change', handleChange);

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

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  //console.log(name, value);
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}

setValues();

function showCss() {
  css.innerHTML =
    '<span>' + btn.style.cssText.split('; ').join('; </span><span>');
  console.log(btn.style);
}
