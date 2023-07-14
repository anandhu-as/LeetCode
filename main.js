const findName = new Promise((resolve, reject) => {
  const name = "max";
  name === "max" ? resolve(name) : reject("name is not correct");
});
findName
  .then((name) => {
    //console.log(name);//
  })
  .catch((err) => {
    /// console.log(err);//
  });
const axios = require("axios");
const data = axios.get("https://cat-fact.herokuapp.com/facts"); //it returns a promsie
data
  .then((response) => {
    // console.log(response);//
  })
  .catch((err) => {
    //console.log(err);//
  });
const fetchData = async () => {
  try {
    const apiData = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log(apiData);
  } catch (err) {
    console.log(err);
  }
};
fetchData();
