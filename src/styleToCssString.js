/**
 * styleToCssString converts a react js style object to a css string value.
 */

import {isUnitlessNumber} from 'react/lib/CSSProperty';
import hyphenateStyleName from 'fbjs/lib/hyphenateStyleName';

const isArray = Array.isArray;
const keys = Object.keys;

// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
let unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

function buildRule(key, value) {
  if (!isUnitlessNumber[key] && typeof value === 'number') {
    value = '' + value + 'px';
  } else if (key === 'content' && !unquotedContentValueRegex.test(value)) {
    value = "'" + value.replace(/'/g, "\\'") + "'";
  }

  return hyphenateStyleName(key) + ': ' + value + ';  ';
}

export default function styleToCssString(rules) {
  let result = '';

  if (!rules || keys(rules).length === 0) {
    return result;
  }

  let styleKeys = keys(rules);

  for (var j = 0, l = styleKeys.length; j < l; j++) {
    let styleKey = styleKeys[j];
    let value = rules[styleKey];

    if (isArray(value)) {
      for (let i = 0, len = value.length; i < len; i++) {
        result += buildRule(styleKey, value[i]);
      }
    } else {
      result += buildRule(styleKey, value);
    }
  }

  return result.trim();
}
