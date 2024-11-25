import React from "react";
import DataTable from "./Components/DataTable";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Dynamic Table with Search & Pagination</h1>
      <DataTable />
    </div>
  );
}

export default App;
