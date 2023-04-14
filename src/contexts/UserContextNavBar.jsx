// import { createContext } from 'react';
// import useNavBarProvider from '../hooks/useNavBarProvider.jsx';

// const UserContext = createContext({});

// export function UserProviderNavBar(props) {
//     const useNavBar = useNavBarProvider();
//     return (
//         <UserContext.Consumer>
//             {value => <>{value && props.children}</>}
//         </UserContext.Consumer>
//     )
// }
// export default UserContext;


import { createContext } from 'react';
import useNavBarProvider from '../hooks/useNavBarProvider.jsx';

const UserContext = createContext({});

export function UserProviderNavBar(props) {
    const useNavBar = useNavBarProvider();
    return (
        <UserContext.Provider value={useNavBar}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useNavBarContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error(
            'useNavBarContext must be used within a UserProviderNavBar'
        );
    }
    return context;
};