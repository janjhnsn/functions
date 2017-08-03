import f from './functions/_functions';

var elements = f.getElement(".class");

f.setAttr(elements, '', '');
f.template("template");
f.toggleClass(elements, '');

f.setStyle(elements[0], "", "");

var div = f.createElement("div");
div.textContent = "HELLO WORLD";

f.prependElement(div as Element, window.document.body);