import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function AddIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M6 12h12m-6 6V6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AddIcon;
