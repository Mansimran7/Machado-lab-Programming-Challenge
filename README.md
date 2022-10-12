# Machado-lab-Programming-Challenge
This is Demo Web Application created with the regards to the following challenge (https://github.com/machado-lab/programming-challenge)

This Application used the following techstacks :- 
1) Java Springboot
2) React and JavaScript
3) PostgreSQL
4) Bootstrap
5) CSS

The purpose of this application is to catpture the the movements of animals from one location to another

**Dataset Used** :- 
1) Populations Data - Consisting of a Premise Id which refers to a farm and the current populations of animals in it
2) Movements Data - Consisting of various transfers that have been performed. This consists of Original Premise Id (ID of source farm), Destination Premise ID (ID of destination farm), number of animals moved, their timestamp, species of animals, account_company doing the transfers
3) Farms Data - This is the master dataset, the premise IDs used above are referenced here. This additionally captures all the information of a particular farm like its Name, Address, City, State, Latitudes, Longitudes and postal code. 

As you can see the dataset described above has slight modifications to the given dataset. We have created a new Farm Table which is done to avoid **redundancy** in the movememts table which previously captures information about source and destination farms for every movement. This Farm information has been moved to a separate table. For your reference I have also pushed this modified Dataset in this repository.  
