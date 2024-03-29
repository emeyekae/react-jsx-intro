/**Define a Tweet component which takes as props: 
the username of the user who wrote the tweet, 
the name of the user who wrote the tweet, 
the date of the tweet, 
and the message being tweeted.
*/

function Tweet({ username, name, date, message }) {
    return (
      <div className="tweet">
        <span><b>{name}</b></span>
        <span className="username">{username}</span>
        <span className="date">{date}</span>
        <p className="message"><i>{message}</i></p>
      </div>
    );
  }
  