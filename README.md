# Photo Order Service

## Description
A Node.js service with TypeScript that allows users to:
1. Get a list of random photo URLs from Unsplash.
2. Create an order with details including photo URLs and user information.
3. Retrieve all orders of a specific user.

## Technologies
- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- Axios

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/zaherkassem/photo-order-service.git
   cd photo-order-service


## API EndPoints:

Get Random Photos
URL: /api/photos/:count
Method: GET
Description: Retrieves a list of random photo URLs.
Params:
count (number): The number of random photo URLs to retrieve.
Create Order
URL: /api/orders
Method: POST
Description: Creates a new order with the provided details.
Body:
json
Copy code
{
  "email": "user@example.com",
  "fullName": "John Doe",
  "fullAddress": "123 Main St, City, Country",
  "imageUrls": ["url1", "url2"],
  "frameColor": "black",
  "user": "userId"
}
Get User Orders
URL: /api/orders/:userId
Method: GET
Description: Retrieves all orders of a specific user.
Params:
userId (string): The ID of the user whose orders to retrieve.