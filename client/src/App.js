import './App.css';
import Localbase from 'localbase';

function App() {
  const db = new Localbase('db')

  const handleClick = () => {
    // Insert to create collection
    // db.collection('chat1').add({
    //   id: 1,
    //   name: "bob",
    //   message: "cookies"
    // })

    let chats = db.collection('chat2').get()
    console.log(chats)
  }

  return (
    <div className="App">
      <h2>Hola</h2>
      <button onClick={() => handleClick()}>action</button>
    </div>
  );
}

export default App;
