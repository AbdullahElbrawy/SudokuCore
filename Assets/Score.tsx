
import * as React from 'react';

import { Svg, Path } from 'react-native-svg';
const Score: any= (props:any) => {
  return (
    <Svg width={props.width} height={props.height}  viewBox='0 0 24 24' fill={props.fill} {...props}  >
<Path  d="M12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,9c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm9.987-4.5c-.253-5.117-4.37-9.234-9.487-9.487V0h-1V2.013C6.383,2.266,2.266,6.383,2.013,11.5H0v1H2.013c.253,5.117,4.37,9.234,9.487,9.487v2.013h1v-2.013c5.117-.253,9.234-4.371,9.487-9.487h2.013v-1h-2.013Zm-9.987,9.5c-4.962,0-9-4.037-9-9S7.038,3,12,3s9,4.037,9,9-4.038,9-9,9Z" fill={props.fill}></Path></Svg>
  );

};

export default Score;
