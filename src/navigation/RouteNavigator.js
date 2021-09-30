import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Explore from '../screens/Explore/Explore';
import Favourite from '../screens/Favourite/Favourite';
import Trip from '../screens/Trip/Trip';
import Inbox from '../screens/Inbox/Inbox';
import Settings from '../screens/Settings/Settings';
import ListingDetail from '../components/ListingDetail/ListingDetail';
import Checkout from '../screens/Checkout/Checkout';
import Login from '../screens/Login/Login';
import Signup from '../screens/SignUp/SignUp';
import Profile from '../screens/Profile/Profile';
import EditProfile from '../screens/EditProfile/EditProfile';
import AddListing from '../screens/AddListing/AddListing';
import {navigationRef} from './RootNavigation';
import {connect} from 'react-redux';
import Notification from '../screens/Notification/Notification';
import BedTypes from '../screens/BedTypes/BedTypes';
import BedTypesSelect from '../screens/BedTypesSelect/BedTypesSelect';
import BathRoom from '../screens/BathRoom/BathRoom';
import Location from '../screens/Location/Location';
import Location1 from '../screens/Location1/Location1';
import NameListing from '../screens/NameListing/NameListing';
import AddImages from '../screens/AddImages/AddImages';
import Amenities from '../screens/Amenities/Amenities';
import Rules from '../screens/Rules/Rules';
import Availability from '../screens/Availability/Availability';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import Availability1 from '../screens/Availability1/Availability1';
import IDVerification from '../screens/EditProfile/ID_verfication';

import FinalStep from '../screens/FinalStep/FinalStep';
import BedTypesSelect1 from '../screens/BedTypesSelect1/BedTypesSelect1';
import BedTypesSelect2 from '../screens/BedTypesSelect2/BedTypesSelect2';
import ChatList from '../components/ChatList/ChatList';
import MapScreen from '../screens/MapScreen/MapScreen';
// import * as TASKS from '../store/actions';
// import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const FavStack = createStackNavigator();
const InboxStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function MainNav(props) {
  const [User, setUser] = useState();
  useEffect(() => {
    console.log(props.user, User);
    if (props.user) {
      setUser(props.user);
    } else {
      setUser(null);
    }
  }, [props.user]);
  function AuthScreen() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Sign in"
          component={Login}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Sign up"
          component={Signup}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    );
  }

  function FavouriteScreen() {
    return (
      <FavStack.Navigator>
        <FavStack.Screen
          name="Favourite"
          component={Favourite}
          options={{headerShown: false}}
        />
        <FavStack.Screen
          name="Place Details"
          component={ListingDetail}
          options={{headerShown: false}}
        />
      </FavStack.Navigator>
    );
  }

  function InboxScreens() {
    return (
      <InboxStack.Navigator>
        <InboxStack.Screen
          name="Inbox"
          component={Inbox}
          options={{headerShown: false}}
        />
        <InboxStack.Screen
          name="Chat Screen"
          component={ChatScreen}
          options={{headerShown: false}}
        />
      </InboxStack.Navigator>
    );
  }

  function ExploreScreen(props) {
    return (
      <ExploreStack.Navigator>
        <ExploreStack.Screen
          name="Explore"
          component={Explore}
          options={{headerShown: false}}
        />
        <ExploreStack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
      </ExploreStack.Navigator>
    );
  }

  function ProfileScreens() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="ProfileView"
          component={Profile}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="idVerfication"
          component={IDVerification}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Notifications"
          component={Notification}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Add Listing"
          component={AddListing}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Bed Types"
          component={BedTypes}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Bed Type Select"
          component={BedTypesSelect}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Bed Type Select1"
          component={BedTypesSelect1}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Bed Type Select2"
          component={BedTypesSelect2}
          options={{headerShown: false}}
        />
        
        <ProfileStack.Screen
          name="Bathroom"
          component={BathRoom}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Map"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Location1"
          component={Location1}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Name Listing"
          component={NameListing}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Add Images"
          component={AddImages}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Amenities"
          component={Amenities}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Rules"
          component={Rules}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Availability"
          component={Availability}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Availability1"
          component={Availability1}
          options={{headerShown: false}}
        />
        <ProfileStack.Screen
          name="Final Step"
          component={FinalStep}
          options={{headerShown: false}}
        />
      </ProfileStack.Navigator>
    );
  }

  function ScreenTabs() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {paddingVertical: Platform.OS === 'android' ? WP(2) : 0},
          activeTintColor: '#EE2073',
          inactiveTintColor: '#6E6E6E',

          style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: {width: 5, height: 3},
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5,
            height: WP(15),
            zIndex: 1,
            alignItems: 'center',
          },
        }}>
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome
                name={'search'}
                size={24}
                color={focused ? '#EE2073' : '#6E6E6E'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{
            tabBarLabel: 'Favourite',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome
                name={'heart'}
                size={24}
                color={focused ? '#EE2073' : '#6E6E6E'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Trip"
          component={Trip}
          options={{
            headerShown: false,
            tabBarLabel: 'Trip',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome
                name={'plane'}
                size={24}
                color={focused ? '#EE2073' : '#6E6E6E'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Inbox"
          component={InboxScreens}
          options={{
            headerShown: false,
            tabBarLabel: 'Inbox',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome
                name={'inbox'}
                size={24}
                color={focused ? '#EE2073' : '#6E6E6E'}
              />
            ),
          }}
        />

        {/* <Tab.Screen
          name={User ? 'profile' : 'Login'}
          component={User ? ProfileScreens : AuthScreen}
          options={{
            tabBarLabel: User ? 'profile' : 'Login',
            tabBarIcon: ({focused}) =>
              User ? (
                <FontAwesome
                  name={'user'}
                  size={24}
                  color={focused ? '#EE2073' : '#6E6E6E'}
                />
              ) : (
                <FontAwesome
                  name={'lock'}
                  size={24}
                  color={focused ? '#EE2073' : '#6E6E6E'}
                />
              ),
          }}
        /> */}
        {!User ? (
          <Tab.Screen
            name={'Login'}
            component={AuthScreen}
            options={{
              tabBarLabel: 'Login',
              tabBarIcon: ({focused}) => (
                <FontAwesome
                  name={'lock'}
                  size={24}
                  color={focused ? '#EE2073' : '#6E6E6E'}
                />
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name={'profile'}
            component={ProfileScreens}
            options={{
              tabBarLabel: 'profile',
              tabBarIcon: ({focused}) => (
                <FontAwesome
                  name={'user'}
                  size={24}
                  color={focused ? '#EE2073' : '#6E6E6E'}
                />
              ),
            }}
          />
        )}
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Tabs"
          component={ScreenTabs}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => {
  console.log('Login state', state.auth);
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(MainNav);
