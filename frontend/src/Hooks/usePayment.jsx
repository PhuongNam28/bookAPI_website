import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { persistor } from '../Redux/store';
import { removeAllBooks } from '../Redux/BookRedux/bookActions';

const usePayment = () => {
  const location = useLocation();
  const { subTotal } = location.state || { subTotal: 0 };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePayCard = async (token) => {
    console.log(token);
    await handlePayment();
  };

  const handlePayCash = async () => {
    alert("OK! You will pay when your product is shipped");
    await handlePayment();
  };

  const handlePayment = async () => {
    const persistOperations = [
      dispatch(removeAllBooks()),
      persistor.pause(),
      persistor.flush(),
      persistor.purge(),
    ];
    await Promise.all(persistOperations);
    navigate('/');
    window.location.reload();
  };

  return { subTotal, handlePayCard, handlePayCash };
};

export default usePayment;
