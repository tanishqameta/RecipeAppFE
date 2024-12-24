Recipe App - Frontend
This is the frontend of a Recipe Application, built using Angular. The application allows users to search, filter, and view detailed recipes.

Table of Contents
Project Overview
Prerequisites
Installation
Development
Running the App
Testing
Building the Project
Technologies Used
Project Overview
The frontend is developed using Angular and includes features like:

A recipe list with search, sorting, and filtering capabilities.
A recipe details page for viewing specific recipe information.
Lazy-loaded modules for efficient routing.
Responsive UI design.
Prerequisites
Before you can run this project, ensure you have the following installed:

Node.js (version >= 14.x)
Angular CLI (version >= 12.x)
npm (Node Package Manager)
Installation
Clone the Repository

If you haven't already cloned the project, run:

bash
Copy code
git clone [<repository-url>](https://github.com/tanishqameta/RecipeAppFE.git)
cd <project-directory>
Install Dependencies

Run the following command to install all the required dependencies:

bash
Copy code
npm install
Development
To run the application in development mode:

bash
Copy code
ng serve
This will start the development server. By default, the application will be available at http://localhost:4200.

Features:
Search bar: Users can search for recipes by name.
Sort and filter: Recipes can be sorted by cook time and filtered by tags.
Recipe Details: Each recipe has a detailed page with ingredients, instructions, and other relevant information.
Running the App
Development Server:

To start the app in development mode and see live changes, run:

bash
Copy code
ng serve
Then, navigate to http://localhost:4200 in your browser.

Build for Production:

To build the app for production, run the following command:

bash
Copy code
ng build --configuration=production
This will create a dist/ directory with the optimized production build. You can then serve the files using any web server, such as http-server.

Testing
Unit Tests:

To run the unit tests with Karma and Jasmine, use the following command:

bash
Copy code
ng test
This will open the Karma test runner in your browser and run the unit tests.

End-to-End Tests:

To run end-to-end tests with Protractor, use:

bash
Copy code
ng e2e
Ensure the application is running before executing this command.

Building the Project
To build the application and prepare it for deployment, use:

bash
Copy code
ng build --prod
This will create a production-ready build in the dist/ folder.

Technologies Used
Angular: The front-end framework for building the web application.
TypeScript: A statically-typed superset of JavaScript.
RxJS: For reactive programming using Observables.
Karma and Jasmine: For unit testing and test running.
Angular Material: For pre-built UI components and design consistency.
Bootstrap: For responsive and mobile-first design.