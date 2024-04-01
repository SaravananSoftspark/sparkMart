import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../Screens/CartScreen";

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return ( 
            <Stack.Navigator>
              <Stack.Screen
                name="MyCart"
                component={CartScreen}
              />
            </Stack.Navigator>
     );
}
 
export default CartStack;