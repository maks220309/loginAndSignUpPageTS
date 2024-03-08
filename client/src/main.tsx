import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
const router = createBrowserRouter([
  { path: '/', element: <SignUp /> },
	{ path: '/login', element: <Login /> }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
