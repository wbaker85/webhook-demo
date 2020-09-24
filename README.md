# Webhook Logger

This is a stand-alone application which will receive and log webhooks from any source.

It uses a relational database (postgres) to persist endpoints and their associated events.  The actual event data is stored in a document database (mongo).

The included `userconfig.sh` file allows for easy deployment on AWS EC2 - just include this script with your instance configuration and the application will be deployed automatically.  However, the app can be easily deployed on any server with docker by building and running the `docker-compose` file.

## Basic usage:
  - Connect to your server and the `/client` path for the user interface: `http://your-server-here/client`.
  - Add endpoints as desired and view their events by clicking on the endpoint path.
  - Click on events to view their data.
  - Destroy the server when done.  This is not meant to be a long-running application as it does not provide any means of security or authentication.