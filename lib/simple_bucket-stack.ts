import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class SimpleBucketStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const simple_bucket = new s3.Bucket(this, "SimpleBucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    })

    new cdk.CfnOutput(this, "BucketName", {
      value: simple_bucket.bucketName,
    })

    new cdk.CfnOutput(this, "BucketArn", {
      value: simple_bucket.bucketArn,
    })
  }
}
