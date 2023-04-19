import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Details from './components/Details';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        index: '/',
        element: <Home />,
      },
      {
        path: '/details/:id',
        element: <Details />,
      },
    ],
  },
]);

const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
