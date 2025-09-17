import React, { useState, memo, useMemo } from "react";

const Child = memo(({ items }) => {
  console.log("Child rendering...");
  let renderedItems = [];
  for (let i = 0; i < items.length; i++) {
    renderedItems.push(<p key={i}>{items[i]}</p>);
  }
  return <div>{renderedItems}</div>;
});

const App = () => {
  const [count, setCount] = useState(0);

  // Creating a new array literal on every render
  /* Instead of the above, it renders the array once and memorises it  */
  const getItems = useMemo(() => {
    return [1, 2, 3];
  }, []);

  return (
    <div className="box">
      <h1>Optimize Child Rendering with Stable Props</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
      <Child items={getItems} />
    </div>
  );
};

export default App;
