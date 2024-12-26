Recipe App - Frontend  
	This is the frontend of a Recipe Application, built using Angular. The application allows users to search, filter, and view detailed recipes.  

The frontend is developed using Angular and includes features like:  
	A recipe list with search, sorting, and filtering capabilities.  
	A recipe details page for viewing specific recipe information.  
	Lazy-loaded modules for efficient routing.  
	Responsive UI design.  

Prerequisites  
	Before you can run this project, ensure you have the following installed:  
		Node.js (version >= 17.x)  
		npm  

Installation  
	If you haven't already cloned the project, run:  
	terminal:  
		clone the code via git: `git clone https://github.com/tanishqameta/RecipeAppFE.git`  
		or move to the project file if already available  
		go into project directory: `cd RecipeAppFE/`  
		install dependencies: `npm i`  
		run the app: `npm start`  
		Then, navigate to http://localhost:4200 in your browser.  

Build and serve for Production:  
	To build the app for production, run the following command:  
		build: `npm build -- --configuration=production`  
		serve: `npm serve -- --configuration=production`  
	This will create a dist/ directory with the optimized production build  

Testing  
	Unit Tests:  
		To run the unit tests with Karma and Jasmine, use the following command: `npm test`  

Technologies Used  
	Angular: The front-end framework for building the web application.  
	TypeScript: A statically-typed superset of JavaScript.  
	RxJS: For reactive programming using Observables.  
	Karma and Jasmine: For unit testing and test running.  
	Bootstrap: For responsive and mobile-first design.  
