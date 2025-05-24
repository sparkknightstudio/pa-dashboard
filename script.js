async function fetchData() {
  const data = {
    username: "TestUser",
    credits: 500,
    streak: 3
  };
  document.getElementById('user-info').innerHTML = `
    <strong>User:</strong> ${data.username} <br>
    <strong>PA Credits:</strong> ${data.credits} <br>
    <strong>Streak:</strong> ${data.streak} days
  `;
}

fetchData();
