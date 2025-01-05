# Car sales prototype

## Local DEV server
- Currently dev server set to run of port 3001 in package.json. It also listens to the laptop IP address from the local network. To access from a phome:  
- run ifconfig | grep 192.168. to find out the laptop IP address
- access the application through http://192.168.x.x:3001/

## Components
- ListingCard  
Displays detailed view of a listing

- LazyImage  
Image component that renders images only when they enter the viewport / become visible.

- Carsousel  
Implements image slider with thumbnail gallery underneath.

