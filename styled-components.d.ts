import { CSSProp, CSSObject } from 'styled-components';
import 'styled-components/cssprop';

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp | CSSObject;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp | CSSObject;
    }
  }
}
