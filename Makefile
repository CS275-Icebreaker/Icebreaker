.PHONY: server \
	app app-build \
	db db-dir 

APP_CONT_NAME=icebreaker
APP_CONT_TAG=noahhuppert/${APP_CONT_NAME}:latest
APP_PORT=8000

DB_CONT_NAME=icebreaker-db
DB_DATA_DIR=$(shell pwd)/run-data/mongo

# server starts the NodeJs server
server:
	npm start

# app starts the application docker container
app:
	docker run \
		-p "${APP_PORT}:${APP_PORT}" \
		--net host \
		-it \
		--rm \
		--name "${APP_CONT_NAME}" \
		"${APP_CONT_TAG}"
		#-v "$(shell pwd):/home/node" \

# app-build builds the application docker container
app-build:
	docker build \
		-t "${APP_CONT_TAG}" \
		.

# db starts the MongoDB docker container
db: db-dir
	docker run \
		-p 27017:27017 \
		--net host \
		-it \
		--rm \
		-v "${DB_DATA_DIR}":/data/db \
		--name "${DB_CONT_NAME}" \
		mongo:3.7.2-jessie

# db-dir ensures the database container directory exists
db-dir:
	mkdir -p "${DB_DATA_DIR}"
