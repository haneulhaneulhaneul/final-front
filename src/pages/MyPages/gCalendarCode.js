
const GoogleCalendarCode = () => {

  return (
    <body>
      <a href="http://localhost:3000/googleCalendarLogin">Google Login</a>
      <form action="https://oauth2.googleapis.com/token" method="post" enctype="application/x-www-form-urlencoded">
        code : <input type="text" name="code" value="4/0AfgeXvszZiyJQsMBzvDHc9cnSuQMWXo8ojzGKDK60lzVw5us5rD6n1GMaCKKgoY-GppjxQ" /><br />
        client_id : <input type="text" name="client_id" value="47359371325-rbeogbgnse216l83cp7jcr3096lpo7f8.apps.googleusercontent.com" /><br />
        client_secret : <input type="text" name="client_secret" value="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" /><br />
        redirect_uri : <input type="text" name="redirect_uri" value="http://localhost:3000/googleCalendarCode" /><br />
        grant_type : <input type="text" name="grant_type" value="authorization_code" /><br />
        <input type="submit" />
      </form>
    </body>
  )
}
export default GoogleCalendarCode;

