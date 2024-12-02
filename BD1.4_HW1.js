const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('BD1.4 - HW1');
});

// 1. Endpoint for a welcome message
app.get('/welcome', (req, res) => {
  const getWelcomeMessage = () => 'We will now learn functions!';
  res.send(getWelcomeMessage());
});

// 2. Endpoint to greet a user by name
app.get('/greet', (req, res) => {
  const username = req.query.username;
  const getGreetingMessage = (name) =>
    `Hey, ${name}! Are you ready to learn functions with us?`;
  res.send(getGreetingMessage(username));
});

// 3. Endpoint to return experience message based on yearsOfExp
app.get('/message', (req, res) => {
  const yearsOfExp = parseInt(req.query.yearsOfExp);
  const checkYearsOfExp = (years) =>
    years > 0
      ? 'You have some experience with functions. Great!'
      : 'No worries. You will start writing functions in no time!';
  res.send(checkYearsOfExp(yearsOfExp));
});

// 4. Endpoint to calculate total hours per week
app.get('/hours', (req, res) => {
  const days = parseInt(req.query.days);
  const hours = parseInt(req.query.hours);
  const getTime = (d, h) => d * h;
  res.send(getTime(days, hours).toString());
});

// 5. Endpoint to check module completion status
app.get('/module-completion-status', (req, res) => {
  const username = req.query.username;
  const hasCompleted = req.query.hasCompleted === 'true';
  const getModuleCompletion = (name, completed) =>
    `${name} has ${completed ? 'completed' : 'not completed'} the modules`;
  res.send(getModuleCompletion(username, hasCompleted));
});

// 6. Endpoint for personalized greeting based on city and name
app.get('/personalized-greeting', (req, res) => {
  const city = req.query.city;
  const name = req.query.name;
  const getPersonalizedGreeting = (city, name) =>
    `Hey, ${name}! What's famous about ${city}?`;
  res.send(getPersonalizedGreeting(city, name));
});

// 7. Endpoint to calculate age based on birth year
app.get('/find-age', (req, res) => {
  const birthyear = parseInt(req.query.birthyear);
  const findAge = (year) => 2024 - year;
  res.send(findAge(birthyear).toString());
});

// 8. Endpoint to check if dedicated time is sufficient
app.get('/is-time-sufficient', (req, res) => {
  const days = parseInt(req.query.days);
  const hours = parseInt(req.query.hours);
  const findRequiredTime = (d, h) =>
    d * h >= 30
      ? 'The time being dedicated is sufficient for learning functions'
      : 'The time being dedicated is not sufficient for learning functions';
  res.send(findRequiredTime(days, hours));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
