import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue à Kebab Estiam</h1>
      <header className="App-header">
        <h2> Choix du pain </h2>
      </header>
      <div className="content">
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9bzz9_8GHg65mRmFsykO69A3etl36THNRg&usqp=CAU"/>
        <p>Baguette</p>
      </div>
      <div className="content">
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3gHTi2IcS8C4021h8LI2qSs7qV-5RN0_6w&usqp=CAU"/>
        <p>Tortilla</p>
      </div>
      <div className="content">
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_F_5YPR4jZ_G9KuERZVZkO45SBpmc-qGIQ&usqp=CAU"/>
        <p> pain normal </p>
      </div>
    </div>
  );
}

export default App;
