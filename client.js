fetch('http://serverip:8888/apitest')
  .then(response => {
    console.log(response.ok);
    return response.json();
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });