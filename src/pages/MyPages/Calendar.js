import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '../MyPages/css/myCalendar.scss'

export default function Calendar() {

    return (
      <div className="cal-container">
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          googleCalendarApiKey='AIzaSyC_H4tHZycqJWg9hwBzmk0ZaNsbxt4GtSE'
          events={{googleCalendarId: 'd99f9a82d410ff071c5b0d33c6b5d182edfbd8ec851ea345a19a5a6795a80943@group.calendar.google.com'}}
          eventDisplay={'block'}
          eventTextColor={'#FFF'}
          eventColor={'#5d54a4'}
          height={'660px'}
          Toolbar
        />
      </div>
    );
  }