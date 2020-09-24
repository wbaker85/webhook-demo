### create a new endpoint:
curl -d '{"name":"new endpoint", "path":"newPath"}' -H "Content-Type: application/json" -X POST http://localhost/endpoints

### post a new event to an endpoint
curl -d '{"stuff":"whatever"}' -H "Content-Type: application/json" -X POST http://localhost/endpoints/newPath