import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a LeParfum ARG! Descubrí tu esencia ideal." />
    </div>
  );
}

export default App;
