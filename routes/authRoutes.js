const passport = require("passport");

module.exports = app => {
  // Enter the passport flow
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Handle the request to get the user profile
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
