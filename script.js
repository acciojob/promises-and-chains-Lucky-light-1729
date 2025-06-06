//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);

  if (!name || isNaN(age)) 
  {
    alert("Please enter valid details");
    return;
  }

	new Promise(function (resolve, reject) 
	{
    setTimeout(function () 
    {
      if (age > 18) 
	  {
        resolve(`Welcome, ${name}. You can vote.`);
      } 
	  else 
	  {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  })
    .then(function (message) 
	{
      alert(message);
    })
    .catch(function (error) 
    {
      alert(error);
    });
});
