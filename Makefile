build:
	docker build --tag react-front .
run:
	docker run \
    -d \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    -e REACT_APP_API_URL=http://localhost:3000 \
    --name=front \
    --network=app_mynetwork \
    react-front

runit:
	docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
	-t frontend-container \
    react-front
