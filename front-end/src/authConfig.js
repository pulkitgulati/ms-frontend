export const msalConfig = {
    auth: {
      clientId: "4bd8398e-4893-4ab6-b49c-3015a770174b",
      authority: "https://login.microsoftonline.com/4eea6844-62c2-4421-8b17-472c57875f31", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      //redirectUri: "http://localhost:3000/",
      redirectUri: "https://msfrontendform.azurewebsites.net/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };