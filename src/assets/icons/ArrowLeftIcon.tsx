import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ArrowLeftIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
      />
    </Svg>
  );
}

export default ArrowLeftIcon;
