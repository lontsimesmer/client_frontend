import FormData from 'form-data';
import Axios from 'axios';
import { useState } from 'react';
import { upload } from '@testing-library/user-event/dist/upload';

function App() {
  const [file, setFile] = useState(null);
  const upload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('screenshot', file);
    Axios.post;
  };
  return (
    <div className="App">
      <input
        type="file"
        name="screenshot"
        onChange={(e) => {
          setFile[console.log(e.target.files[0])];
        }}
      />
      <button onClick={(e) => upload(e)}>Submit</button>
    </div>
  );
}

export default App;
