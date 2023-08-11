# Summer_Project (Transport Management System)

### Tech Stack used:

- ReactJS for FrontEnd
- NodeJS for API (Backend)
- MySQL as Database. (The SQL database schema is also attached in the repository.

Here are few screenshots of UI where the tools used are ReactJS, NextJS and language of coding is Javascript.

## 1. Login Page

![image](https://github.com/vatsalpsutariya/Summer_Project/assets/122974525/726761ec-21e7-4b4a-bdab-ec685b7d4956)

- Here we can see that is the user credentials don't match with the ones in database, the authentication fails.
- Also used 'context' for session storage

## 2. Client Dashborad

![image](https://github.com/vatsalpsutariya/Summer_Project/assets/122974525/9ce11ad8-04db-4717-8e18-1c118fa49c86)

- It show the data of how many shipments are there along with the count on the basis of status i.e. Dispatched, Delivered etc.
- It also shows the pie-chart and the bar graph of last year shipments for a visual overview of the shipments.
- The side navigation bar is yet to be filled with different features and functionalities. (open for extension)

![image](https://github.com/vatsalpsutariya/Summer_Project/assets/122974525/b7e72719-9c2b-4f14-9abf-387ab4564269)

- Here it shows the in-depth view for all the shipments and also provides the highlighted status view.
- A Search-Box is provided to search on the basis of load No., carrier name, shipper name, consignee, etc. and it is real time search box it looks for entered value exactly at the time of entry in box.
- We can also filter the data on the basis of status by just clicking on one of the boxes, data will be filtered as shown below.

![image](https://github.com/vatsalpsutariya/Summer_Project/assets/122974525/862767bb-aebc-4c48-9711-a3ac46e4264f)

- We also have a button called 'Add Shipment' that redirects us to the next page.

## 3. Add New Shipment

![image](https://github.com/vatsalpsutariya/Summer_Project/assets/122974525/c8187fcc-c3e9-4802-9fc1-a9c05a1ff95e)

- Here we can enter the details of the shipments and all that data forms a json object on clicking 'Proceed'.
- Now this json object is sent to one of the API endpoint and that will add the data to the MySQL database server.

### Along with these, many other functionalities are provided by the backend, check in the repository for available backend modules with business logic functions.

### Moreover the services are also decoupled as modules in backend folder so each service/feature is extensible for future.

Note: This version may have many ways for further optimization and there's also a space for further develpoment, see you soon at in next version.
Have a nice day :)
