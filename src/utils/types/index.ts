export type navpropsData = {
  icon: React.ReactNode;
  text?: string;
  titleText?: string;
  route: string;
  color?: string;
  size?: string;
};

export type userData = {
  email?: string;
  name: string;
  password: string;
};

export type userDetails = {
  _id: string;
  name: string;
  email: string;
  account_number: string;
  station: any;
  users: string;
  phoneNum: string;
  pspName: string;
  officeAddress: string;
  password: string;
  isAuthenticated: boolean;
};
export type userOnboarding = {
  station: any;
  phoneNum: string;
  pspName: string;
  officeAddress: string;
};
