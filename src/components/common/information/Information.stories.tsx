import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Information from './Information.widget';

storiesOf('Information', module)
  .add('single label', () => (
    <Information label={'Label'} value={'Value'}/>
  ))
  .add('multiple labels', () => (
    <div>
      <Information label={'Label1'} value={'Value1'}/>
      <Information label={'Label2'} value={'Value2'}/>
      <Information label={'Label3'} value={'Value3'}/>
    </div>
  ))
  .add('multiple valies', () => (
    <div>
      <Information label={'Label1'} value={['Value', 'Value', 'Value']}/>
    </div>
  ))
;
