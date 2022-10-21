import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const REGION = import.meta.env.VITE_AWS_REGION;
const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: import.meta.env.VITE_AWS_IDENTITY_POOL_ID,
  }),
});

export async function openFromS3(bucketKey: string) {

    try {
        const res = await s3.send(new GetObjectCommand({
            Bucket: import.meta.env.VITE_AWS_S3_BUCKET,
            Key: bucketKey,
        }))

        window.open(window.URL.createObjectURL(await new Response(res.Body, {headers: { "Content-type": "application/pdf"}}).blob()))

    } catch(e) {
        console.error(e)
    }

}