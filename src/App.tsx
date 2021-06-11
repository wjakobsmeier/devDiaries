import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const startTimer = () => {
    console.log('start timer');
  };

  const stopTimer = () => {
    console.log('stop timer');
  };

  const saveTimer = () => {
    console.log('save timer');
  };

  const resetTimer = () => {
    console.log('reset timer');
  };

  return (
    <div className="App">
      <p>02:45:45</p>
      <Button size="large" onClick={() => startTimer()}>
        start
      </Button>
      <Button size="large" onClick={() => stopTimer()}>
        stop
      </Button>
      <Button size="large" onClick={() => saveTimer()}>
        save
      </Button>
      <Button danger size="large" onClick={() => resetTimer()}>
        reset
      </Button>
    </div>
  );
}

export default App;
