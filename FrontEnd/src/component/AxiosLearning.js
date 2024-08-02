import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAsyncValue } from "react-router-dom";

export default function AxiosLearning() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    // fetchDataWithThen();
    // fetchDataWithParam();
    // fetchDataWith();
    // fetchDataWithTryAndCatch();
    // postRequestWithAxios();
    postRequestWithAxios1();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (response ?? response?.data) {
      // console.log(response.data)
      setData(response.data);
    }
  };
  async function fetchDataWithThen() {
    axios
      .get("https://jsonplaceholder.typicode.com/user")

      .then((response) => {
        // console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error, error.message, error.code);
      });
  }
  // axios.get('/user', {
  //     params: {
  //       ID: 12345
  //     }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });

  const fetchDataWith = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );

    if (response) {
      console.log(response.data);
    }
  };

  const fetchDataWithParam = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments",
      {
        params: {
          postId: 1,
        },
      }
    );

    if (response) {
      console.log(response.data);
    }
  };

  const fetchDataWithTryAndCatch = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
        {
          params: {
            postId: 16,
          },
        }
      );

      if (response) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postRequestWithAxios = async () => {
    const response = await axios.post("https://api.restful-api.dev/objects", {
      params: {
        name: "vinay",
        data: {
          year: 1997,
          price: 0,
          "CPU Module": "nnnjj",
          "Hard disk size": "asdas",
        },
      },
    });

    if (response) {
      console.log(response.data);
    }
  };

  function postRequestWithAxios1() {
    axios
      .post("https://api.restful-api.de/objects", {
        name: "vinay vinay",
        data: {
          year: 1997,
          price: 0,
          "CPU Module": "nnnjj",
          "Hard disk size": "asdas",
        },
      })

      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config, error);
      });
  }

  //Sending Form Data with post request
  // const {data} = await axios.post('/user', document.querySelector('#my-form'), {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })

  return (
    <div>
      {data.length > 0 &&
        data.map((object) => (
          <div key={object.id} className="py-3 px-3">
            {" "}
            {/* Add a unique key prop */}
            <h1>{object.name}</h1>
            <h2>{object.username}</h2>
            <h3>{object.email}</h3>
            <h4>
              {object.address.street}, {object.address.suite},{" "}
              {object.address.city}, {object.address.zipcode}
            </h4>{" "}
            {/* Access address properties correctly */}
            <h5>{object.phone}</h5>
            <h6>{object.website}</h6>
          </div>
        ))}
    </div>
  );
}
