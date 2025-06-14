/**
 * Enum representing the available routes in the application.
 */
export enum Routes {
    Home = 'Home',
    Login = 'Login'
  }
  
  /**
   * Represents the parameter types for the root stack navigation.
   */
  export type RootStackParams = {
    [Routes.Home]: undefined;
    [Routes.Login]: undefined;
  };

  
  /**
   * Represents the navigation parameters for the root stack.
   */
  export type NavigationParams = RootStackParams;
  
  export default Routes