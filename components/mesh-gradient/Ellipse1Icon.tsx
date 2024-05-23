import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 699 417' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={349.5} cy={208.5} rx={349.5} ry={208.5} fill='#F906D2' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };