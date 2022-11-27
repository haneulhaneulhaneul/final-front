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
          events={{googleCalendarId: 'bancco0509@gmail.com'}}
          eventDisplay={'block'}
          eventTextColor={'#FFF'}
          eventColor={'#5d54a4'}
          height={'660px'}
          Toolbar
        />
      </div>
    );
  }