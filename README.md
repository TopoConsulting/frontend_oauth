# frontend_oauth

## Setup
``` 
cd oAuth
npm i
npm run dev
```
### configure Site URL on supabase project
Side bar --> Authentication --> URL Configuration

### configure GCP and supabase oauth

#### GCP
1. search for Oauth Consent screen
2. select clients on side bar (left hand side)
3. click on desired client ID, acquire client secret and client ID (right hand side)
4. authorised redirect URLs ```(https://<YOUR_SUPABASE_PROJECT_ID>.supabase.co/auth/v1/callback)```

#### supabase oauth
1. Side bar --> Authentication --> sign in/up
2. enable google oauth
3. input google client id and google client secret acquired
4. save


### configure Facebook and supabase oauth

#### facebook
1. enter facebook developer website
2. create an app
3. allow sign in with face book
4. on side bar --> use cases --> customise authenticate and request from users with facebook login
5. enable both profile picture and email under permissions tab
6. go to settings tab
7. under ```Valid OAuth Redirect URIs``` ```https://<YOUR_SUPABASE_PROJECT_ID>.supabase.co/auth/v1/callback```
8. on side bar --> app settings --> basic
9. copy app ID and app secret

#### supabase oauth
1. Side bar --> Authentication --> sign in/up
2. enable facebook oauth
3. input facebook app id and facebook app secret acquired
4. save

