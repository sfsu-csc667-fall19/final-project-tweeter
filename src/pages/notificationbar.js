import React from 'react';

const NotificationBar = (props) => {
    return(
        <div className={"notification-bar" + (props.count > 0 ? ' active' : '')}>
            <p>There are {props.count} new tweets! <a href="#top" onClick={props.onShowNewTweets}>Click here to see them.</a></p>
        </div>
    )

}
export default NotificationBar;