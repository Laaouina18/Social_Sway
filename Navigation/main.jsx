import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Profile from '../screens/Profile';
import Post from '../screens/Post';
import Like from '../components/Like';
import { dislike, like } from '../redux/actions';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          statusBarColor: 'black',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'red' }
        }}
      >
        <Stack.Screen
          name='Home'
          component={Navbar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={({ route }) => ({
            title: `user de ${route.params.userprop.name}`,
            headerShadowVisible: false,
            headerStyle: { backgroundColor: route.params.userprop.favColor },
            headerRight: () => (
              likes && likes.includes(route.params.userprop) ? 
              <Like title='Photos removed' description='wa2 wa2 wa2' icon='trash' action={dislike(route.params.userprop)} /> :
              <Like title='Photos enregitrees' description='Elles sont disponibles dans votre selection' icon='heart' action={like(route.params.userprop)} />
            )
          })}
        />
        <Stack.Screen
          name='Post'
          component={Post}
          options={({ route }) => ({
            title: `${route.params.post.title}`
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
