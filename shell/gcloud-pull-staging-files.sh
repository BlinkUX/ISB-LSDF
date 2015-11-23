#./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/staging.env" ./.env
#./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/staging-ssl/client-cert.pem" ./client-cert.pem
#./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/staging-ssl/client-key.pem" ./client-key.pem
#./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/staging-ssl/server-ca.pem" ./server-ca.pem
./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/stage/stage.env" ./.env
./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/stage/stage-ssl/ISB-CGC-stage-client-cert.pem" ./client-cert.pem
./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/stage/stage-ssl/ISB-CGC-stage-client-key.pem" ./client-key.pem
./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/stage/stage-ssl/ISB-CGC-stage-server-ca.pem" ./server-ca.pem
./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/stage/ISB-CGC-stage-client-secrets.json" ./client_secrets.json
./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/stage/ISB-CGC-stage-privatekey2.json" ./privatekey.json
./google-cloud-sdk/bin/gsutil cp "gs://${GCLOUD_BUCKET}/stage/ISB-CGC-stage-privatekey2.pem" ./privatekey.pem
