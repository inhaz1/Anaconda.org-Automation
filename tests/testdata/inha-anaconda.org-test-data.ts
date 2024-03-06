export const OrgUrl = {
  url: 'https://qa.dot-org.anacondaconnect.com/',
};
export const ValidCredentials = {
  username: 'inha',
  password: 'inha3619',
};
export const InvalidCredentials = {
  username: 'inha.zaheen',
  password: 'inha',
};
export const Signup_newCredentials = {
  username: 'abcdef',
  email: 'inha.zaheen92@yopmail.com',
  password: 'abcd1234',
  confirm_password: 'abcd1234',
};
export const Signup_pwmismatchCredentials = {
  username: 'abcd_12',
  email: 'abcd_12@gmail.com',
  password: 'abcd1234',
  confirm_password: 'abcd12345',
  Stext: 'Password must match',
};
export const Signup_eminvalidCredentials = {
  username: 'abcd',
  email: 'abcdgmail.com',
  password: 'abcd12345',
  confirm_password: 'abcd12345',
  Stext: 'User Already exists',
};
export const Signup_oldunCredentials = {
  username: 'inha',
  email: 'abcd_123@gmail.com',
  password: 'abcd1234',
  confirm_password: 'abcd1234',
  Stext: 'User Already exists',
};
export const Signup_oldemCredentials = {
  username: 'abcd',
  email: 'izaheen@anaconda.com',
  password: 'abcd1234',
  confirm_password: 'abcd1234',
  Stext: 'Email Already exists',
};
//===========================================Search data================================//
export const EmptySearch = {
  value: '',
  message: ' Search query is empty! ×',
};

export const ValidSearch = {
  value: 'abc',
};

export const InValidSearchBeforLogin = {
  value: 'dvdfvfdbvf',
  message: ' You must login to search private packages ×',
};

export const InValidSearchAfterLogin = {
  value: 'dvdfvfdbvf',
  message: ' There were no items found for this search ',
};
