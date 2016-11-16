/* @flow */

type StyleDescr = {[key: string]: number | string};

const VENDOR_PREFIX = /^(moz|ms|o|webkit)-/;
const NUMERIC_STRING = /^\d+$/;
const UPPERCASE_PATTERN = /([A-Z])/g;
/**
 * CSS properties which accept numbers but are not in units of "px".
 */
const isUnitlessNumber = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridColumn: 1,
    fontWeight: 1,
    lineClamp: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,

    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
}

// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/CSSPropertyOperations.js
function processStyleName(name: string): string {
  return name
    .replace(UPPERCASE_PATTERN, '-$1')
    .toLowerCase()
    .replace(VENDOR_PREFIX, '-$1-');
}

// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/dangerousStyleValue.js
function processStyleValue(name: string, value: number | string): string {
  let isNumeric;
  if (typeof value === 'string') {
    isNumeric = NUMERIC_STRING.test(value);
  } else {
    isNumeric = true;
    value = String(value);
  }
  if (!isNumeric || value === '0' || isUnitlessNumber[name] === true) {
    return value;
  } else {
    return value + 'px';
  }
}

function styleToCSS(styleDescr: StyleDescr): string {
  return Object.keys(styleDescr).map((name) => {
    let styleValue = processStyleValue(name, styleDescr[name]);
    let styleName = processStyleName(name);
    return `${styleName}: ${styleValue}`;
  }).join('; ');
}

export default styleToCSS;
