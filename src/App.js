import './App.css';
import FormTab from './components/FormTab';
import SuccessToast from './components/SuccessToast';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <FormTab/>
    <SuccessToast/>
    <ToastContainer/>
    </>
  );
}

export default App;
