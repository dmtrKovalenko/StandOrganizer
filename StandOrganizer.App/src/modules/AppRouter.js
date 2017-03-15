/*eslint-disable react/prop-types*/

import React from 'react';
import CounterContainer from './counter/CounterContainer';
import CalendarConatiner from './calendar/CalendarContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Counter') {
    return <CalendarConatiner />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
