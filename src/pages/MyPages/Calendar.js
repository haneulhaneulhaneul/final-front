import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '../MyPages/css/myCalendar.scss'

export default function Calendar() {

    return (
      <div className="cal-container">
        <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FrecieveCode.html&client_id=47359371325-rbeogbgnse216l83cp7jcr3096lpo7f8.apps.googleusercontent.com">Google Calendar Api 사용 허가</a>
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