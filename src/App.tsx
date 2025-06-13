import Message from './components/Message';

function App() {
  const messageText = 'Привет, это мой первый React-компонент!';

  return (
    <div className="App">
      <h1>Мое приложение</h1>
      <Message text={messageText} />
    </div>
  );
}

export default App;