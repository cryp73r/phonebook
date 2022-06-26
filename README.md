# PhoneBook Backend
## Crafted with ❤️ by CRYP73R

This is backend server for my Internship Task that performs basic CRUD operation. It is purely made using [NodeJS](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) as my Database.

## API Documentation

### 1. Contact

Handles contact's **C**reate, **R**ead, **U**pdate and **D**elete operations.

| Method | Endpoint | Description | Parameter |
| ------ | -------- | ----------- | --------- |
| POST | `/contact` | Create New Contact | `firstName` and `contactNumber` are **required** fields<br />`lastName` is optional field<br />To be sent as a JSON request body |
| GET | `/contact` | Get all Contacts. It can aslo be used to query DB. | `q` parameter is required to be sent when querying along with value |
| GET | `/contact/id` | Get specified contact | N/A |
| PATCH | `/contact/id` | Updates specified contact | `firstName`, `lastName` and `contactNumber` are allowed updated. To be sent as a JSON request body |
| DELETE | `/contact/id` | Deletes specified contact | N/A |

### Response Codes

Below listed response codes are only returned form server.

| Response Code | Description |
| ------------- | ----------- |
| 201 | Contact created successfully |
| 200 | Request executed successfully |
| 400 | Bad Request. Client Side Error |
| 404 | Not Found |
| 500 | Internal Server Error. Server side issue |

<hr />

# PhoneBook Frontend
## Crafted with ❤️ by CRYP73R

This is frontend for my Internship Task that shows basic CRUD operation. It is purely made using [Flutter](https://flutter.dev/).

## Site is Live! [![Netlify Status](https://api.netlify.com/api/v1/badges/e306e6b2-cb58-43d3-8b21-de4d8fb66dd9/deploy-status)](https://app.netlify.com/sites/cryptphonebook/deploys)
- [PhoneBook](https://cryptphonebook.netlify.app/#/)