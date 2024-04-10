import { useState } from "react";
import "./index.css";
import Data from "./components/Data/Data";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Rightsideicons from "./components/RightSideIcons/RightSideIcons";
import { auth, provider } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => setUser(user))
      .catch((err) => alert(err));
  };

  return (
    <>
      {user ? (
        <>
          <Header photoURL={user.photoURL} />
          <div className="App">
            <Sidebar />
            <Data />
            <Rightsideicons />
          </div>
        </>
      ) : (
        <div className="loginWrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" alt="gdrive" />
          <button onClick={signIn}>Login to Google Drive Clone</button>
        </div>
      )}
    </>
  );
}

export default App;
