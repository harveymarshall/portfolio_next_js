import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 660 982' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={330} cy={491} rx={330} ry={491} fill='#9D5BF0' />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };