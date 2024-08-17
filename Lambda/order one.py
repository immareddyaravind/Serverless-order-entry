import json
import boto3

# Initialize the DynamoDB resource and specify the table
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('registration-table')  # Replace 'registration-table' with your actual table name

def lambda_handler(event, context):
    # The event object contains the incoming request data
    print("Received event:", json.dumps(event, indent=2))

    # Extract the body from the event (which contains the form data)
    body = json.loads(event['body'])

    # Create a new item in DynamoDB table
    response = table.put_item(
        Item={
            'email': body['email'],   # Assuming 'email' is a unique key in your DynamoDB table
            'name': body['name'],
            'phone': body['phone'],
            'password': body['password']
        }
    )

    # Return a response back to the client
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'  # This allows cross-origin requests
        },
        'body': json.dumps({'message': 'Registration successful'})
    }
