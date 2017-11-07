
/* DOM FUNCTIONS */
import addClass from './dom/addClass';
import addEvent from './dom/addEvent';
import appendElement from './dom/appendElement';
import cloneElement from './dom/cloneElement';
import createElement from './dom/createElement';
import emptyElement from './dom/emptyElement';
import getAttr from './dom/getAttribute';
import getBoundingRect from './dom/getBoundingRect';
import getElement from './dom/getElement';
import getNextElement from './dom/getNextElement';
import getParent from './dom/getParent';
import getOffset from './dom/getOffset';
import getPreviousElement from './dom/getPreviousElement';
import getStyle from './dom/getStyle';
import hasClass from './dom/hasClass';
import prependElement from './dom/prependElement';
import removeElement from './dom/removeElement';
import removeAttr from './dom/removeAttribute';
import removeClass from './dom/removeClass';
import scrollAnimate from './dom/scrollAnimate';
import setAttr from './dom/setAttribute';
import setStyle from './dom/setStyle';
import toggleClass from './dom/toggleClass';
import triggerEvent from './dom/triggerEvent';

/* UTIL FUNCTIONS */
import debounce from './util/debounce';
import each from './util/each';
import template from './util/template';

/* QUERYSTRING FUNCTIONS */
import getQueryString from './queryString/get';
import removeQueryString from './queryString/remove';
import upsertQueryString from './queryString/upsert';

export default {
    /* DOM FUNCTIONS */
    addClass
    , addEvent
    , appendElement
    , cloneElement
    , createElement
    , emptyElement
    , getAttr
    , getBoundingRect
    , getElement
    , getNextElement
    , getParent
    , getOffset
    , getPreviousElement
    , getStyle
    , hasClass
    , prependElement
    , removeElement
    , removeAttr
    , removeClass
    , scrollAnimate
    , setAttr
    , setStyle
    , toggleClass
    , triggerEvent

    /* UTIL FUNCTIONS */
    , debounce
    , each
    , template

    /* QUERYSTRING FUNCTIONS */
    , getQueryString
    , removeQueryString
    , upsertQueryString
};
