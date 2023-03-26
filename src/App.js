import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(3);
  // loggedIn=3
  // 1,2,3
  return (
    <div>
      {loggedIn == 1 ? (
        <h1>Welcome User 1</h1>
      ) : loggedIn == 2 ? (
        <h1>Welcome User2</h1>
      ) : (
        <h1>Welcome User3</h1>
      )}
    </div>
  );
}

export default App;
