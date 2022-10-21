import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from "amazon-cognito-identity-js";

const LOCAL_STORAGE_KEY = '__STRACCIA17_TOKEN__'

export function login(email: string, password: string) {
  console.info(email, password)
  return new Promise<boolean>((resolve, reject) => {
    const authenticationData = {
      Username: email,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const poolData = {
      UserPoolId: import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID, // Your user pool id here
      ClientId: import.meta.env.VITE_AWS_COGNITO_APP_CLIENT_ID, // Your client id here
    };
    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        localStorage.setItem(LOCAL_STORAGE_KEY, accessToken)
        resolve(result.isValid());
      },

      onFailure: function (err) {
        clearSession()
        reject(err.message || JSON.stringify(err));
      },
    });
  });
}

export function clearSession() {
  localStorage.removeItem(LOCAL_STORAGE_KEY)
}

export function getAuthToken() {
  return localStorage.getItem(LOCAL_STORAGE_KEY)
}
