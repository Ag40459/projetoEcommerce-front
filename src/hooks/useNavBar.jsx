import { useContext } from 'react';
import UserProviderNavBar from '../contexts/UserContextNavBar';

function useNavBar() {
    return useContext(UserProviderNavBar);
}

export default useNavBar;