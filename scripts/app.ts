import f from './functions/_functions';

var elements = f.getElement(".class");

f.setAttr(elements, '', '');
f.template("template");
f.toggleClass(elements, '');

f.setStyle(elements[0], "", "");