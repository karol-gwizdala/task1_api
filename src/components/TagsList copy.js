import React, { useEffect, useState } from "react";
import { Tag } from "./Tag";

export const TagsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.stackexchange.com/2.3/tags?order=asc&sort=name&site=stackoverflow"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setItems(data.items);
        console.log(data);
      })
      .catch((error) => {
        /**
         * Obsługa błedów
         */
        console.error(error);
      });
  }, []);

  return (
    <div>
      <table role="grid">
        <thead>
          <tr>
            <th>Count</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.count}>
                <td>{item.count}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {items.map((tag) => (
        <Tag key={tag.count} tag={tag} />
      ))} */}
    </div>
  );
};
