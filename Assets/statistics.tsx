
import * as React from 'react';

import { Svg, Path } from 'react-native-svg';
const statistics: any= (props:any) => {
  return (
    <Svg width={props.width} height={props.height} viewBox='0 0 24 24' fill={props.fill}  >
<Path  d="m24,23v1H2.5c-1.378,0-2.5-1.122-2.5-2.5V.024h1v21.476c0,.827.673,1.5,1.5,1.5h21.5Zm-18-2.976v-8h-1v8h1Zm4,0h1v-10h-1v10Zm5,0h1v-7h-1v7Zm6,0v-11.024h-1v11.024h1ZM10,3.707l5,5L22.854.854l-.707-.707-7.146,7.146-5-5-5.854,5.854.707.707,5.146-5.146Z" fill={props.fill}></Path></Svg>
  );

};

export default statistics;
