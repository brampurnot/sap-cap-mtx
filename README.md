# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

## Backend service

# Build 
cds build --production

# Build image
pack build helloworld-srv \
     --path gen/srv \
     --buildpack gcr.io/paketo-buildpacks/nodejs \
     --builder paketobuildpacks/builder-jammy-base \
     --env BP_NODE_RUN_SCRIPTS=

docker tag helloworld-srv:latest bpurnot/helloworld-srv:0.0.13
docker push bpurnot/helloworld-srv:0.0.13

## Frontend service

# Build 
docker build --network=host --platform=linux/amd64 -t bpurnot/helloworld-app:0.0.20 .
docker tag bpurnot/helloworld-app:0.0.20 bpurnot/helloworld-app:0.0.20
docker push bpurnot/helloworld-app:0.0.20

## Approuter
pack build helloworld-approuter \
     --path app/router \
     --buildpack gcr.io/paketo-buildpacks/nodejs \
     --builder paketobuildpacks/builder-jammy-base \
     --env BP_NODE_RUN_SCRIPTS=

docker tag helloworld-approuter:latest bpurnot/helloworld-approuter:0.0.2
docker push bpurnot/helloworld-approuter:0.0.2

## Build database

# Build
pack build helloworld-hana-deployer \
     --path gen/db \
     --buildpack gcr.io/paketo-buildpacks/nodejs \
     --builder paketobuildpacks/builder-jammy-base \
     --env BP_NODE_RUN_SCRIPTS=

docker tag helloworld-hana-deployer:latest bpurnot/helloworld-hana-deployer:0.0.2
docker push bpurnot/helloworld-hana-deployer:0.0.2

## Multi-tenancy sidecar
cds build --production
pack build helloworld-sidecar --path gen/mtx/sidecar/ \
  --buildpack gcr.io/paketo-buildpacks/nodejs \
  --builder paketobuildpacks/builder:base \
  --env BP_NODE_RUN_SCRIPTS=""

docker tag helloworld-sidecar:latest bpurnot/helloworld-sidecar:0.0.6
docker push bpurnot/helloworld-sidecar:0.0.6


## Deploy to Kyma

# Build helm
helm dependency build
helm upgrade --install helloworld ./chart \
     --namespace dev
