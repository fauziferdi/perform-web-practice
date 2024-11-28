import React, { useEffect, useState } from "react";

export default function Cache() {
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      "cache-control": "max-age=43000",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(true);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!Loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Cache</h1>
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </>
      )}
    </>
  );
}
