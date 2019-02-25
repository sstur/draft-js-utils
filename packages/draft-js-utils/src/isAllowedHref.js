// @flow
const DATA_URL = /^data:/i;

function isAllowedHref(input: ?string) {
  if (input == null || input.match(DATA_URL)) {
    return false;
  } else {
    return true;
  }
}

export default isAllowedHref;
