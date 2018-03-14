.PHONY: server \
	db db-dir

DB_CONT_NAME=icebreaker-db
DB_DATA_DIR=$(shell pwd)/run-data/mongo

# server starts the NodeJs server
server:
	npm start

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
