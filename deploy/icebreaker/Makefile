.PHONY: all build deploy rm

NAME=icebreaker

# all builds and deploys the chart
all: build deploy

# build packages the chart
build:
	helm package .

# deploy pushes the chart to the kubernetes cluster
deploy: 
	helm upgrade \
		--install \
		--namespace "${NAME}" \
		"${NAME}" .

# rm deletes the app deployment from the cluster
rm: 
	helm delete --purge "${NAME}"
