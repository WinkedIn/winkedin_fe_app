import { CommonActions, createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

type RouteParams = Record<string, any>;

export const goToTopNavigation = (routeName: string): void => {
  if (navigationRef.isReady()) {
    const gotoLogin = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
        },
      ],
    });
    navigationRef.dispatch(gotoLogin);
  } else {
    console.log("Navigation not ready");
  }
};

export const goToRoute = (routeName: string, params?: RouteParams): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(routeName, params);
  } else {
    console.log("Navigation not ready");
  }
};
