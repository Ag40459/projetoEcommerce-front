import { createContext } from 'react';
import useNavBarProvider from '../hooks/useNavBarProvider';

const UserContext = createContext({});

export function UserProviderNavBar(props) {
    const useNavBar = useNavBarProvider();
    return (
        <UserContext.Provider value={useNavBar}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContext;