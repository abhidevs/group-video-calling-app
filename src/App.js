import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./components/VideoCall";
import './App.css';

function App() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="app">
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <div className="center">
          <div className="box">
            <h2>Video Calling App</h2>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setInCall(true)}
              >
              Join Call
            </Button>
            <h2>Made using Agora</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
