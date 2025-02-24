const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

async function connectAndCreatePost() {
  try {
    await mongoose.connect("mongodb://localhost/my_database");
    console.log("Connected to MongoDB!");

    const blogpost = await BlogPost.create({
      title: "The Mythbuster’s Guide to Saving Money on Energy Bills",
      body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:",
    });

    console.log("Blog post created:", blogpost);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Call the async function
connectAndCreatePost();
