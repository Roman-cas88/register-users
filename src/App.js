import 'bootstrap/dist/css/bootstrap.min.css';
import { NewUser } from './components/NewUser';
import { UsersData } from './components/UsersData';

function App() {
  return (
    <div className="App">
      <NewUser />
      <UsersData />
    </div>
  );
}

export default App;
