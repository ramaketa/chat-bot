# ChatBot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Testing

During testing, please take into delays in simulating requests in the backend:
1) When initializing the application
     - 1 seconds to fetch list of messages
     - you can change it at
      ```MessagesService.getAll``` function
2) When receiving a response
     - 2 seconds to fetch answer from user query
     - you can change it at
      ```CommandsService.getCommandListInfo``` function