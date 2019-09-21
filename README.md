# Spotify Demo
The purpose of this project is to demonstrate a simple use case of the Spotify API. My project combines both the Spotify authorization flow to gain user access and a ReactJS-based code to render the content.

## Instructions 

After downloading or cloning this repository, there are a few things that should be configured in order for the project to work properly on your machine. They are the following: 

1.  download your node package manager for both the `auth/` and the `client/` directories
2. configure the `/auth/authoritation_code/app.js`

### 1. Downloading the NPM packages

It is important that the npm packages are downloaded for *both* the `auth` and `client` directories. Both folders contain their own respective `package.json` file that will inform the node package manager of the dependencies that will be installed. 

In order to install the node package manager, ensure that you have Node.js installed on your machine (if you do not have npm installed, you may visit [this](https://nodejs.org/en/) site to download). Run the following command to determine whether your have NodeJS installed: 

```bash
node --version
# output: v10.16.3 or any other version number
```

Then you must enter the `auth/` directory and run the below command

```bash
npm install

# directory should look like this (auth/): 
    # authorization_code
    # client_credentials
    # implicit_grant
    # node_modules
    # package-lock.json
    # package.json
```


you should do the same for the `client/` directory, which contains the contents of our web page: 

```bash
npm install

# directory should look like this (client/): 
    # README.md
    # node_modules
    # package-lock.json
    # package.json
    # public
    # src
```

### 2. Configuring the `app.js` file

Open the `app.js` file and ensure that you enter the account information that is particular to your account. Specifically, the Client ID and the Client Secret. These can be found by logging into your account on the [Spotify for Developers](https://developer.spotify.com/dashboard/login) page. After logging in, make sure you *create* a project that will be accessed by your web app. 

It is also critical that you configure the **Redirect URI** manually on your account. To do this, follow the below steps :

1. Log in to the [Spotify for Developers](https://developer.spotify.com/dashboard/login) page. This will automatically take you to your account's dashboard landing page.
    - If you do not already have the project created, go ahead and create one. 
2. From the dashboard page, click on your project to view application dashboard. On the right hand side should be a green *Edit Settings* button.
3. Under the *Redirect URI*, click on Add. Enter the following: `http://localhost:8888/callback` and save this. Now exit the Edit Settings screen to return to the main app screen.
4. On the main app screen, note the *Client ID*. Click on the "Show Client Secret button" and note the *Client Secret* as well. It is recommended that your save both the Client ID and the Client Secret on a simple text file. 
5. You may now exit the Spotify for Developers web page. 


Now open the `app.js` on the editor of your choice (you can find it at: `/auth/authorization_code/app.js`). Near the top, you will see this line: 

```javascript
var client_id = keys.CLIENT_ID; // Your client id
var client_secret = keys.CLIENT_SECRET; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri
```

Ensure that the Redirect URI exactly matches the one that was configured on your account on the SPotify for Developers page. As for the `client_id` and the `client_secret`, you may directly paste your keys into the file (as a string). It is strongly recommended that you create an external `keys.js` file that contains the actual values of the keys; this is because if you wish to publish your project, you will want to hide your keys (in this case, you may add your `keys.js` file to a `.gitignore` file) so that other people do not access your private account information. See below for how you may define your keys: 

```javascript
// defining your keys directly in the apps.js file - no further configuration necessary
var client_id = '0123456789'; // Your client id (example)
var client_secret = '9876543210'; // Your secret (example)
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri


/* Below is an alternate method */ 


// defining keys in a keys.js file
const CLIENT_ID = '0123456789'; // your client id (example)
const CLIENT_SECRET = '9876543210'; // your secret (example)
module.exports = { CLIENT_ID, CLIENT_SECRET }; // export so that it may be accessible to the app.js file

// import statement in the app.js file
var client_id = keys.CLIENT_ID; // Your client id
var client_secret = keys.CLIENT_SECRET; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri
```

## Sources of Inspiration

Note: I was inspired by a YouTube video from [Jonny Kalambay](https://www.youtube.com/watch?v=prayNyuN3w0&t=1272s). Some of the methods you  see in the project were inspired by his tutorial. 

In addition, the Spotify API is beautifully documented. I made use of the authorization examples [here](https://github.com/spotify/web-api-auth-examples). Spotify also offers some further tools developed by their team for querying data, rather than building the query from the gorund up. I used the JMPerez package which you can find [here](https://github.com/jmperez/spotify-web-api-js).

When in doubt, it is always recommended that you refer to the Spotify for developers pages for troubleshooting errors.