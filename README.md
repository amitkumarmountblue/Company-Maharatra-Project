# **Company Master :: Maharashtra**

This is a Data project, in which we had to fetch data from CSV file and calculate certain stats and then dump the data in json file.
   1. Calculate the data on AUTHORIZE_CAP with the following intervals
      * < 1L
      * 1L to 10L
      * 10L to 1Cr
      * 10Cr to 100Cr
      * More than 100Cr
  
   2. Calculate the data of company registration by year from the field DATE_OF_REGISTRATION parse out the registration year.
   3. Top 10 registrations by "Principal Business Activity" for the year 2015.
   4. Top 10 registrations by "Industrial Class".

Maharastra.csv file is empty because the size was greater than 100 MB and I was unable to push on github. So you can download it from https://data.gov.in/catalog/company-master-data?filters%5Bfield_catalog_reference%5D=354261&format=json&offset=12&limit=6&sort%5Bcreated%5D=desc .

## Install all dependency

       npm init 
       npm i csv-parser

## Run this project

       cd src
       cd server
       node index.js

The data is dumped into the output folder as separate JSON files.
1. Data of AUTHORIZE_CAP is dumped into authorized_cap.json file.
2. Data of company registration by year from the field DATE_OF_REGISTRATION is dumped into date_of_registration.json file.
3. Top 10 registrations by "Principal Business Activity" for the year 2015 is dumped into resgistration_Principal_Business.json file.
4. Top 10 registrations by "Industrial Class" is dumped into registration_industrial_class.json.

## High chart
1. I have written code for visualisation for all above problem in index.js file in public folder.
2. You can see them by running index.html file which is in the public folder, open it in the live server.