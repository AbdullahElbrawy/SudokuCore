import * as React from 'react';

import { Svg, Path } from 'react-native-svg';
const TimeClock: any= (props:any) => {
  return (
    <Svg width={props.width} height={props.height}  viewBox='0 0 24 24' fill={props.fill} {...props}  >
<Path d="m12,5c.276,0,.5.224.5.5v6.376c0,.178-.095.343-.248.432l-4.5,2.624c-.079.047-.166.068-.252.068-.172,0-.339-.089-.432-.248-.14-.238-.059-.545.18-.684l4.252-2.479v-6.089c0-.276.224-.5.5-.5Zm12,9.5c0-.828-.672-1.5-1.5-1.5h-4.5c-.276,0-.5.224-.5.5s.224.5.5.5h4.275l-5.726,5.726c-.37.37-.977.371-1.347,0l-1.196-1.195c-.76-.759-2.003-.759-2.762,0l-4.606,4.606c-.195.195-.195.512,0,.707.098.098.226.146.354.146s.256-.049.354-.146l4.606-4.606c.37-.37.977-.371,1.347,0l1.196,1.195c.763.762,1.999.762,2.761,0l5.744-5.743v4.311c0,.276.224.5.5.5s.5-.224.5-.5v-4.5ZM1,12C1,5.935,5.935,1,12,1c5.508,0,10.197,4.112,10.907,9.564.036.273.289.465.561.432.274-.036.467-.287.432-.561C23.124,4.486,18.009,0,12,0,5.383,0,0,5.383,0,12c0,3.956,1.95,7.657,5.217,9.9.087.06.186.088.283.088.159,0,.315-.076.412-.217.156-.228.099-.539-.129-.695-2.995-2.057-4.783-5.449-4.783-9.076Z" fill={props.fill}></Path></Svg>
  );

};

export default TimeClock;
