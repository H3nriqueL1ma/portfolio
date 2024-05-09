import './App.css';
import InitEntrySystem from './components/Init';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" /> 
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" crossOrigin="anonymous" />
        </header>
        <InitEntrySystem/>
      </div>
    </>
  );
}

export default App;
