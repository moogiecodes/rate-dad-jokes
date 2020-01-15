// IN PROGRESS

const numJokes = 10;

$(function () {
  async function getJokes(num) {
    const jokeArray = [];

    for (let i = 0; i < numJokes; i++) {
      let response = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: "application/json"
        }
      });
      console.log(response.data.joke);
      // jokeArray.push(response);
    }
  }

  getJokes(numJokes);
});