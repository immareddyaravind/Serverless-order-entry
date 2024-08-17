# Serverless Order Placing Form

## Step 1: Create DynamoDB Table

```sh
Table Name: order-table
Partition key: order

```

## Step 2: Create IAM Role for Lambda Function
```sh
IAM Role Name: OrderEntry-Role

Permissions:
1. CloudWatch Full Access
2. DynamoDB Full Access

```

## Step 3: Create Lambda Function

```sh
Function Name: order-entry-function
Runtime: Python 3.9

```

## Step 4: Write Lambda Function

## Step 5: Create API Gateway and Enable CORS

## Step 6: Test the Project


### Enable CORS: 

```sh
Access-Control-Allow-Origin: '*'
Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token
Access-Control-Allow-Methods: POST

```

## Step 5: Test the Application

Thankyou!

