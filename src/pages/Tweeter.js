import React, {useState, useEffect} from 'react';
import Tweets from './tweets';
import Loader from './loader';
import NotificationBar from './notificationbar';
import WriteTweet from './writetweet';
import axios from 'axios';
import '../App.css';

const Tweeter = () => {

    const [tweets, setTweets] = useState([]);
    const [count,setCount] = useState(0);
    const [page,setPage] = useState(0);
    const [paging,setPaging] = useState(false);
    const [skip,setSkip] = useState(0);
    const [done,setDone] = useState(false);

    // To add a tweet to our timeline
    const addTweet = (tweet) => {
        // Increment the unread count
        setCount(count+1);

        // Increment the skip count
        setSkip(skip+1);

        // Add tweet to the beginning of the tweets array
        var update = tweets;
        setTweets(update.unshift(tweet));
    }

    // To load tweets fetched from the server
    const loadPagedTweets = (tweetsResponse) => {
        // If we still have tweets...
        if(tweetsResponse.length > 0) {
            // Get current application state
            var updated = tweets;
            // Push them onto the end of the current tweets array
            tweetsResponse.forEach(function(tweetsResponse){
            updated.push(tweetsResponse);
        });
            // This app is so fast, I actually use a timeout for dramatic effect
            // Otherwise you'd never see loader svg
            setTimeout(()=>{

                // Set application state (Not paging, add tweets)
                setTweets(updated);
                setPaging(false);

            }, 1000);

        } else {
            // Set application state (Not paging, paging complete)
            setPaging(false);
            setDone(true);
        }
    }

    // To get JSON from server by page
    const getPage = () => {
        // Setup our ajax request
        var request = new XMLHttpRequest();
        request.open('GET', 'page/' + page + "/" + skip, true);
        request.onload = () => {
        // If everything is cool...
        if (request.status >= 200 && request.status < 400){
            // Load our next page
            loadPagedTweets(JSON.parse(request.responseText));
        } else {
            // Set application state (Not paging, paging complete)
            setPaging(false);
            setDone(true);
        }
        };
        // Fire!
        request.send();
    }

    const checkWindowScroll = () => {
        // Get scroll pos & window data
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var s = (document.body.scrollTop || document.documentElement.scrollTop || 0);
        var scrolled = (h + s) > document.body.offsetHeight;

        // If scrolled enough, not currently paging and not complete...
        if(scrolled && !paging && !done) {

            // Set application state (Paging, Increment page)
            setPaging(true);
            setPage(page+1)

            // Get the next page of tweets from the server
            getPage();
        }
    }

    // To show the unread tweets
    const showNewTweets = () => {
        // Get current application state
        var updated = tweets;

        // Mark our tweets active
        updated.forEach(function(tweet){
        tweet.active = true;
        });

        // Set application state (active tweets + reset unread count)
        setTweets(updated);
        setCount(0);
    }
    
    const getTweet = () => {
        axios.get(`http://18.224.179.182:4005/tweets/all`)
        .then((res) => {
          console.log(res.data);
          setTweets(res.data)
        })
        .catch(console.log);
    };

    React.useEffect(() => {
        getTweet()
        /*
        // Initialize socket.io
        var socket = new WebSocket.Server({ port: 6001 }); ///CAMBIAR

        // On tweet event emission...
        socket.on('tweet', function (data) {

            // Add a tweet to our queue
            addTweet(data);

        });
        */

        // Attach scroll event to the window for infinity paging
        window.addEventListener('scroll', checkWindowScroll);
    },[]);


    return (
        <div className="tweets-app">
            <WriteTweet />
            <Tweets tweets={tweets} />
            <Loader paging={paging}/>
            <NotificationBar count={count} onShowNewTweets={showNewTweets}/>
        </div>
    );
}
export default Tweeter;