import { CSSProp } from 'styled-components';

function classNs(...classNames: Array<string | CSSProp | undefined>) {
  return classNames
    .reduce(
      (classNames: Array<string | CSSProp | undefined>, className) =>
        classNames.concat(className),
      []
    )
    .join(' ');
}

export default classNs;
