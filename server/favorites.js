// RAW CODE NEED TO BE DEVELOPED

// Create favorite
exports.create = (req, res) => {
    const tweet = req.tweet;
    tweet.favorites = req.user;
    tweet.save(err => {
        if(err) {
            return res.send(400);
        }
        res.send(201, {}); //result of HTTP POST request
    });
};

// Delete favorite
exports.destroy = (req, res) => {
    const tweet = req.tweet;
    tweet.favorites = req.user;
    tweet.save(err => {
        if(err) {
            return res.send(400);
        }
        res.send(200); 
    });
};

