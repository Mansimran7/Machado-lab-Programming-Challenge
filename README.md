# Machado-lab-Programming-Challenge
This is Demo Web Application created with the regards to the following challenge (https://github.com/machado-lab/programming-challenge)

This Application used the following techstacks :- 
1) Java Springboot
2) React and JavaScript
3) PostgreSQL
4) Bootstrap
5) CSS

The purpose of this application is to catpture the the movements of animals from one location to another

**Datasets Used** :- 
1) Populations Data - Consisting of a Premise Id which refers to a farm and the current populations of animals in it
2) Movements Data - Consisting of various transfers that have been performed. This consists of Original Premise Id (ID of source farm), Destination Premise ID (ID of destination farm), number of animals moved, their timestamp, species of animals, account_company doing the transfers
3) Farms Data - This is the master dataset, the premise IDs used above are referenced here. This additionally captures all the information of a particular farm like its Name, Address, City, State, Latitudes, Longitudes and postal code. 

As you can see the dataset described above has slight modifications to the given dataset. We have created a new Farm Table which is done to avoid **redundancy** in the movememts table which previously captures information about source and destination farms for every movement. This Farm information has been moved to a separate table. For your reference I have also pushed this modified Dataset in this repository.  

**Backend Services** :- (Refer "programming-challenge" folder)

Next up is our Backend API services. The APIs are written in Java and Springboot. Below are some of the endpoints 

1) **/populations (GET)** - This is a GET request to fetch all the records from the population table
2) **/populations (POST)** - This is a POST request to add a new records in the populations table.
3) **/movements (GET)** - This is a GET request to fetch all the records from the movements table 
4) **/movements (POST)** - This is a POST request to fetch the next movement from one farm to another. As this request gets called the number of animals for a original premise ID and destination premise ID get updated in the populations table. Further this new record gets added to the movements table. This is the most important request which we will be also using in our React Components. 
5) **/farms (GET)** - This is a GET request to fetch all the records from the farm table. Returning all the information of farms along with their name, adress, city state, etc. 
6) **/farms (POST)** - This is a POST request to add new records to the farm table in case there are new farms whose information needs to be stored 
7) **/authenticate (POST)** - As an additional task, I also added some code for authentication. The users cannot just run the above requests. Once they have provided a valid username and password. They will call this request and then a JSON Web Tokens (JWT)  will be returned to them. JWT Tokens are mechanisms by whichwe can securely transfer information over the web(between two parties). It can be used for Authorization and Information exchange. This is the first endpoint a user should hit and generate their JWT Tokens which will then be used in the headers to call other requests. More infor on JWT Tokens (https://jwt.io/introduction). The username and password used to generate the token is "foo" and "foo". This is currently hardcoded at the backend. 

**Automation Script** :- 

Next, as an additional task I have also added an automation script. This script is written in Javascript and needs to be run in a Postman environment. In Postman under pre request scripts, this script can be copy pasted. You can add any dummy URL at the top to run the request. This script will run all the essential components. First it would run the /authenticate end point and generate a the token then run all the 3 GET requests and then run the POST request to add a new movement record. 

**FrontEnd Services** :- 

Next is the UI components which are written in React, JavaScript, Bootstrap and CSS. Below is a description about each component. 
1) Authenticate User - This should be used for the first time time to get a JWT token as without that no other component would be run and at the backend you would be getting 403 Forbidden error message without the token
2) Data - Once you have got the JWT Token you could add it in the textbox on the Data tab and check out the current records of populations and movements
3) Add Records - Here with your JWT Token yo could add records for the next movement. This is the /movement (POST) request that will run in the background. Once the API run is successful you would see a message saying records are added. Then you can head back to the Data Tab and see your updated records in the movement table and the population table. 

**Pre-requisites to run the project**
1) Require Java (Java 1.8) - Once installed you can check the version with "java -version"
2) Maven - Once installed you can check the version with "mvn -v"
3) PostgreSQL and PgAdmin - The links to install them are https://www.postgresql.org/download/ & https://www.pgadmin.org/download/
4) Node.js is also required for all the Front End functionalities, Once installed check the version with "node -v" &  "npm -v"
5) An IDE to run our backend services (IntelliJ Ultimate / Eclipse / Spring Tool Suite)
6) Postman to run our backend queries & run our automation scripts - Link to Download (https://www.postman.com/downloads/)
7) An IDE to run the UI code eg VS Code. 

**How to run**
1) Once Intellij is installed. Open the "programming-challenge" folder. make sure your JDK is set to 1.8 and you have enabled annotations in Project Settings
2) Run the Application
3) Open VSCode and cd to "pc_fe" folder. Do npm install and npm start. 
4) Use Postman to test automation script
