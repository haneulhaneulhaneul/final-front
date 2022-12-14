import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const OAUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FgoogleCalendarCode&client_id=47359371325-rbeogbgnse216l83cp7jcr3096lpo7f8.apps.googleusercontent.com";
const CLIENT_ID = "47359371325-rbeogbgnse216l83cp7jcr3096lpo7f8.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const API_KEY = "AIzaSyC_H4tHZycqJWg9hwBzmk0ZaNsbxt4GtSE";
const SCOPES =
  "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";
// const SCOPES =
//   "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";

const GoogleCalendar = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://apis.google.com/js/api.js";

    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.gapi) handleClientLoad();
    });
  }, []);


  // κΆν νλ
  const openSignInPopup = () => {
    window.gapi.auth2.authorize(
      { client_id: CLIENT_ID, scope: SCOPES },
      (res) => {
        console.log(res);
        if (res) {
          console.log(window.gapi.client, res);

          if (res.access_token)
            localStorage.setItem("access_token", res.access_token);

          fetch(
            `https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token=${res.access_token}`
          )
            .then((res) => res.json())
            .then((data) =>
              localStorage.setItem("calendarId", data.items[0].id)
            );

          window.gapi.client.load("calendar", "v3", listUpcomingEvents);
        }
      }
    );
  };

  /**
   *  On load, called to load the auth2 library and API client library.
   */
  const handleClientLoad = () => {
    window.gapi.load("client:auth2", initClient);
  };

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  // λ‘κ·ΈμΈ μ΄κΈ°ν(λ§¨μ²μ μ΄κΈ°νλ₯Ό μ§νν΄μΌ λ€μ μμμ μ§νν  μ μμ.)
  const initClient = () => {
    if (!localStorage.getItem("access_token")) {
      openSignInPopup();
    } else {
      fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
        .then((res) => {
          if (res.status !== 401) {
            return res.json();
          } else {
            localStorage.removeItem("access_token");

            openSignInPopup();
          }
        })
        .then((data) => {
          if (data?.items) {
            console.log(data);
            setEvents(formatEvents(data.items));
          }
        });
    }
  };

  /**
   * Print the summary and start datetime/date of the next ten events in
   * the authorized user's calendar. If no events are found an
   * appropriate message is printed.
   */
  const listUpcomingEvents = () => {
    window.gapi.client.calendar.events
      .list({
        calendarId: "primary",
        // timeMin: new Date().toISOString(),
        showDeleted: true,
        singleEvents: true,
        // maxResults: 10,
        // orderBy: "startTime",
      })
      .then(function (response) {
        var events = response.result.items;

        console.log(events);

        if (events.length > 0) {
          setEvents(formatEvents(events));
        }
      });
  };

  const formatEvents = (list) => {
    return list.map((item) => ({
      title: item.summary,
      start: item.start.dateTime || item.start.date,
      end: item.end.dateTime || item.end.date,
    }));
  };

  // μΌμ  μΆκ°
  const addEvent = () => {
    if (window.gapi.client || localStorage.getItem("access_token")) {
      let today = new Date();

      fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}&timeMax=${new Date(
          "Apr 14, 2021"
        ).toISOString()}&timeMin=${new Date("Apr 15, 2021").toISOString()}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
        fetch(
          `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify({
              end: {
                dateTime: new Date("Apr 16, 2021"),
              },
              start: {
                dateTime: new Date("Apr 15, 2021"),
              },
              summary: "Test",
            }),
          }
        );
    }
  };

  return (
    <>
      <button onClick={addEvent}>οΌ μΌμ  μΆκ°</button>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </>
  );
};

export default GoogleCalendar;