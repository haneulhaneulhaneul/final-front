
const GoogleCalendarLogin = () => {

  return (
    <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FgoogleCalendarCode&client_id=47359371325-rbeogbgnse216l83cp7jcr3096lpo7f8.apps.googleusercontent.com">Google Calendar Api 사용 허가</a>
  )
}
export default GoogleCalendarLogin;