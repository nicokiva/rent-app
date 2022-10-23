import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";
import List from "./screens/reservations-list";

function App() {
  return (
    <div style={{ padding: "20px 0" }}>
      <section style={{ textAlign: "right", marginRight: "50px", marginBottom: "20px" }}>
        <Button variant='contained'>
          <AddIcon />
        </Button>
      </section>
      <List />
    </div>
  );
}

export default App;
