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

**Backend Services** :-

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
