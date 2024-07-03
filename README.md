# foodie-delight

Foodie Delight is an admin dashboard created in Angular which supports CRUD operations.

# Steps to run the application

- Clone the repository.
- run `npm install`.
- run the command `npx json-server db.json`. This is to get the mock server running.
- run the command `ng serve` to run the application.

# Flow of the application

- The user will log in as an admin.
- For demo purposes, I've created a button to auto-fill test admin credentials.
- After the successful login, the user will be redirected to the dashboard.
- There users can add, edit or delete restaurants.

Due to time constraints, I could not complete the following features I wished to add.

- Restaurant search by name in the dashboard.
- Header with a greeting message and logout option.
- Better HTTP error handling
