import Button from "./components/button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;

// let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

// const handleSelectItem = (item: string) => {
//   console.log(item);
// };

// return (
//   <div>
//     <ListGroup
//       items={items}
//       heading="Cities"
//       onSelectItem={handleSelectItem}
//     />
//   </div>
// );

{
  /* <Alert>
  Hello <span>World</span>
</Alert>; */
}
