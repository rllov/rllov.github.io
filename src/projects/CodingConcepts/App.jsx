import React from "react";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="bg-green-100 rounded-2xl p-4">
        <h1>Mapping</h1>
        <div className="p-4 rounded-2xl">
          <h2>What is Mapping?</h2>
          <p>
            Mapping is a powerful technique in programming that allows you to
            transform or iterate over a collection of items, such as arrays or
            objects. It is commonly used to apply a function to each element in
            a collection, resulting in a new array or object with the
            transformed values.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center p-4 rounded-2xl">
          <p className="mockup-code w-full md:w-1/2 p-4">
            <pre data-prefix="1">
              <code className="bg-transparent">{`users.map((user)=> (`}</code>
            </pre>
            <pre data-prefix="2">
              <code className="bg-transparent">{`   {user.id}`}</code>
            </pre>
            <pre data-prefix="3">
              <code className="bg-transparent">{`   {user.xyz}`}</code>
            </pre>
            <pre data-prefix="4">
              <code className="bg-transparent">{`)`}</code>
            </pre>
          </p>
          <p className=" w-full md:w-1/2 p-4 ">
            This code snippet demonstrates how to use the map function in
            JavaScript // maps through the users array and returns a new array
            with the specified properties
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center mt-4 p-4 rounded-2xl">
          <p className="mockup-code w-full md:w-1/2 p-4">
            <pre data-prefix="1">
              <code className="bg-transparent">{`{items.map((item) => (`}</code>
            </pre>
            <pre data-prefix="2">
              <code className="bg-transparent">{`   <tr>`}</code>
            </pre>
            <pre data-prefix="3">
              <code className="bg-transparent">{`     <td className="px-4 py-2 text-green-600 text-center">`}</code>
            </pre>
            <pre data-prefix="4">
              <code className="bg-transparent">{`       {item.high ? item.high.toLocaleString() : "N/A"} gp`}</code>
            </pre>
            <pre data-prefix="5">
              <code className="bg-transparent">{`     </td>`}</code>
            </pre>
            <pre data-prefix="6">
              <code className="bg-transparent">{`   </tr>`}</code>
            </pre>
            <pre data-prefix="7">
              <code className="bg-transparent">{`)}`}</code>
            </pre>
          </p>
          <p className="w-full md:w-1/2 p-4">
            This example is from the RunescapeGETracker project, where the map
            function is used to iterate over items and render a table row for
            each item, displaying its high price in a formatted manner.
          </p>
        </div>
      </section>
      <section className="bg-blue-100 rounded-2xl p-4 mt-4">
        <h1>Filtering</h1>
        <div className="p-4 rounded-2xl">
          <h2>What is Filtering?</h2>
          <p>
            Filtering is a technique used to create a new array containing only
            elements that meet certain criteria. It is commonly used to remove
            unwanted items from a collection based on specific conditions.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center p-4 rounded-2xl">
          <p className="mockup-code w-full md:w-1/2 p-4">
            <pre data-prefix="1">
              <code className="bg-transparent">{`users.filter((user) => user.active)`}</code>
            </pre>
          </p>
          <p className="w-full md:w-1/2 p-4">
            This code snippet filters the users array, returning a new array
            containing only active users.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center mt-4 p-4 rounded-2xl">
          <p className="mockup-code w-full md:w-1/2 p-4">
            <pre data-prefix="1">
              <code className="bg-transparent">{`{items.filter((item) => item.high > 1000).map((item) => (`}</code>
            </pre>
            <pre data-prefix="2">
              <code className="bg-transparent">{`   <tr>`}</code>
            </pre>
            <pre data-prefix="3">
              <code className="bg-transparent">{`     <td className="px-4 py-2 text-green-600 text-center">`}</code>
            </pre>
            <pre data-prefix="4">
              <code className="bg-transparent">{`       {item.high.toLocaleString()} gp`}</code>
            </pre>
            <pre data-prefix="5">
              <code className="bg-transparent">{`     </td>`}</code>
            </pre>
            <pre data-prefix="6">
              <code className="bg-transparent">{`   </tr>`}</code>
            </pre>
            <pre data-prefix="7">
              <code className="bg-transparent">{`)})}`}</code>
            </pre>
          </p>
          <p className="w-full md:w-1/2 p-4">
            This example filters items to include only those with a high price
            greater than 1000 gp, then maps over the filtered items to render
            them in a table.
          </p>
        </div>
      </section>
      <section className="bg-yellow-100 rounded-2xl p-4 mt-4">
        <h1>Searching</h1>
        <div className="p-4 rounded-2xl">
          <h2>What is Searching?</h2>
          <p>
            Searching is a technique used to find specific items in a collection
            based on a query or condition. It is often used to locate items that
            match a certain criteria, such as a name or property.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center p-4 rounded-2xl">
          <p className="mockup-code w-full md:w-1/2 p-4">
            <pre data-prefix="1">
              <code className="bg-transparent">{`items.find((item) => item.name === "Rune Sword")`}</code>
            </pre>
          </p>
          <p className="w-full md:w-1/2 p-4">
            This code snippet searches for an item with the name "Rune Sword" in
            the items array, returning the first match found.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center mt-4 p-4 rounded-2xl">
          <p className="mockup-code w-full md:w-1/2 p-4">
            <pre data-prefix="1">
              <code className="bg-transparent">{`{items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))}`}</code>
            </pre>
            <pre data-prefix="2">
              <code className="bg-transparent">{`.map((item) => (`}</code>
            </pre>
            <pre data-prefix="3">
              <code className="bg-transparent">{`   <tr>`}</code>
            </pre>
            <pre data-prefix="4">
              <code className="bg-transparent">{`     <td className="px-4 py-2 text-green-600 text-center">`}</code>
            </pre>
            <pre data-prefix="5">
              <code className="bg-transparent">{`       {item.high.toLocaleString()} gp`}</code>
            </pre>
            <pre data-prefix="6">
              <code className="bg-transparent">{`     </td>`}</code>
            </pre>
            <pre data-prefix="7">
              <code className="bg-transparent">{`   </tr>`}</code>
            </pre>
            <pre data-prefix="8">
              <code className="bg-transparent">{`)})}`}</code>
            </pre>
          </p>
          <p className="w-full md:w-1/2 p-4">
            This example filters items based on a search query, returning only
            those whose names include the query string, and then maps over the
            results to render them in a table.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
