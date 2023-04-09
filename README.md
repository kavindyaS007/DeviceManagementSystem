# DeviceManagementSystem

## Tech stack
Back-end  : SpringBoot

Front-end : ReactJs

Database  : MySQL

## Features ;
  1)  Add a device (with id, model, name, status, enrolled time)  
      ** Status should be - "ENROLLED" or "ACTIVE" or "INACTIVE"  
  3)  View all devices  
      i)    Display all the devices in a table  
      ii)   Devices can be filtered by searching them using 'Device Name', 'Device Model' and 'Device Status'  
      iii)  Filtered device count is display  
  4)  View a device by Id  
  5)  Update a device  
  6)  Delete a device  
  
## to Run;

>>git clone https://github.com/kavindyaS007/DeviceManagementSystem.git

Create a database with the name of "deviceDb" and import 'device_table.sql'

Open the "back-end" folder in an IDE and run

Use the navbar links to view the particular pages
  1) Devices    : list of all the devices
  
                  Edit - brings to the edit page of single device element
                  
                  Delete - deletes the particular device form the list
  2) Add Device : brings to the add device ui
