import "./App.css";
import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Book" },
  { id: 3, name: "Table" },
  { id: 4, name: "Pen" },
];
function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const productListAll = useMemo(() => {
    console.log("filtering....");
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="enter product name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Inc:{count}</button>
      <ul>
        {productListAll.map((pr) => (
          <li key={pr.id}>{pr.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// initial render filtering prints, cz component render.. all array returned and memoised
// when seach changes react compares and re-render hapnes, prints console everytime
// but when state changes as search and reference remains same doesnot print console
// without usememo prints console for state change also.
