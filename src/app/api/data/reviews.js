const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve the JSON array of reviews
app.get('/', (req, res) => {
  const reviews = [
    {
      "author": "rorza",
      "review": "the bot works well and is working how i asked plus a few added bonuses like the bold texts and stuff"
    },
    {
      "author": "Anonymous",
      "review": "Thank you @coder_master for creating an email verifier for me, it’s very helpful and I will be using it a bunch. Very quick delivery and very satisfied."
    },
    {
      "author": "Anonymous",
      "review": "Coder_master has been very helpful in me overcoming various coding challenges while working on my personal projects. Not only has he been able to address all of my issues, but when asked, he has also been patient enough to explain each step along the way. He's consistently responsive by promptly addressing my questions and offering assistance whenever I need it. As a piece of constructive criticism, I would be to encourage more independent problem-solving rather than immediately providing the solution. While I appreciate his willingness to solve the problem directly, I believe it would be more beneficial for my learning if he initially pointed me in the right direction. If I still need further assistance, then he could provide additional support. Overall, my experience with Coder_master has been positive, and I am grateful for the invaluable help he has provided me."
    }
  ];

  res.json(reviews);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
