import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 783 286' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M79.5 267C-62.9 211.4 20.1667 155.833 79.5 135C126.3 149 99 71.1667 79.5 30.5L351 0H783V215L709.76 224.011C657.573 230.431 606.28 206.6 577.529 162.576C576.896 161.607 575.778 161.068 574.626 161.177L327 184.5C327 238.5 221.9 322.6 79.5 267Z'
      fill='#34B69F'
    />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };