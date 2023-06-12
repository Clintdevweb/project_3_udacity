MyStore Project 
MyStore is Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

Started
To use these files, simply merge the folders into the root directory of your scaffolded Angular application.

Project Instructions
Project introduction: MyStore
You've completed the course! You know how to create a single-page application to offer a rich, dynamic experience on the web.

Before you begin
Before you begin scaffolding the application, ask yourself:
How do I fetch and use data from an external API (or JSON data file)?
What does a logical hierarchy of components look like? For example, which components should be parent components, and which components should be their children components?
How do I collect input from the user, using controlled form elements as the "source of truth" of such data?
What are events in Angular, and how do I listen and respond to them?
What is a model, and how do I create one in TypeScript?
How do I pass data between parent and child components? Hint: Which decorators should be used?
How do I pass data between sibling or otherwise "unrelated" components?
How is routing set up in the templates? Likewise, how do I configure the app routing module to support this?

SCSS and CSS. The provided stylesheets are not required, but you may use the included SCSS and CSS classes to help you style the application. Feel free to use your creativity and build a UI as you see fit!

data.json. You may fetch the list of products for your store from the API created in the previous course of this Nanodegree program. In lieu of using that data, you may also choose to have your application read the provided data.json file to populate your store.

Project features
Your application reflects the same user experience as that of a real-world e-commerce website, including a(n):

Product list page, which displays the available products for the user to choose and add to their cart (in various quantities)
Product details page, which displays more information about any particular product
Shopping cart, which includes the products that the user has added to their cart
Checkout form, which collects information about the user (e.g., name, address, payment details, etc.)
Order confirmation page, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)
Development strategy
Feel free to use this overview and the rubric specifications to create this project. You are always welcome to design and implement your own workflow, but if you are stuck or could use some inspiration, we've included the following walkthrough the help you get up and running.

Scaffold your project using the Angular CLI, and install any dependencies.
Generate the product list component. Having the product list as the "main" page is a great start for your users.
Begin building the component logic and template What is the function of the product list? What logic is included in the TypeScript component, and how does its HTML template function? Does this component collect any user input? If so, how does information entered by the user relate to properties in the TypeScript component?
Consider the hierarchy of components. Which other components do you anticipate you'll need to build in this application? Which component(s) should render other components? Which components should represent a parent-child relationship? Feel free to draw out this hierarchy as a chart to help you visualize the relationships between components.
Create the TypeScript model for products in the app. Any available product should be of this type, rather than an ordinary object.
Generate the service(s). Which service(s) make the most sense? For any particular service, what is its function? Hint: You may want to create a service to handle any asynchronous data.
Fetch data from the API (or included data.json file) and render products in your product list.

You should run: npm i and then npm run start to get app. Thank you
