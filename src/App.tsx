import React, { Fragment, useEffect } from 'react'

import { Provider } from 'react-redux'

import { StatusBar } from 'react-native'

import { ThemeProvider } from 'react-native-elements'

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { useLocation } from './hooks/useLocation'

import { store } from './redux/store'

import { Header } from './components/Header'

import { HomeScreen } from './screens/HomeScreen'

import { ComunaDetailScreen } from './screens/ComunaDetailScreen'

import { SearchScreen } from './screens/SearchScreen'

const Stack = createStackNavigator()

const headerOptions: StackNavigationOptions = {
    cardStyle: {
        backgroundColor: '#FFFFFF'
    },
    header: () => <Header />
}

const theme = {
    colors: {
        primary: '#03A8F4'
    }
}

const App = () => {

    const { comunaName } = useLocation()

    useEffect(() => {
        console.log(comunaName)
    }, [comunaName])

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Provider store={store}>
                    <StatusBar barStyle="dark-content" />
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={headerOptions}>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="ComunaDetail" component={ComunaDetailScreen} />
                            <Stack.Screen name="Search" component={SearchScreen} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </Fragment>
        </ThemeProvider>
    );
};

export default App;
