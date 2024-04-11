
import * as React from 'react';

import { Svg, Path } from 'react-native-svg';

const ArrowNext: any= (props:any) => {
  return (
    <Svg width={props.width} height={props.height} {...props}  >
<Path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm5.522-12.154c.636,.636,.636,1.671,0,2.308l-4.803,4.803-.707-.707,4.75-4.75H6v-1h10.762l-4.75-4.75,.707-.707,4.803,4.803Z"  fill={props.fill}  >  </Path> 
</Svg>
);
};

export default ArrowNext;
