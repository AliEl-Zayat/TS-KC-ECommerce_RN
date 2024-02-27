declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {} // You should replace RootStackParamList with your actual root stack param list type
  }
}
