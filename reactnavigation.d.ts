export type RootStackParamList = {
  Login;
  Signup;
  SetPin: {codex: number};
  ConfirmPin: {codex: number};
  //   Onboarding;
  //   Home;
  Navigation;
  //   profile;
  //   editProfile;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
