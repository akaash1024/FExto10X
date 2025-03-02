# Social Collaboration 

## Project Overview
This project is a single-page social collaboration website built using React with backend Express + MongoDB. The website provides a streamlined login, post view, comments and of course such related features.. User can also share his/her thought
 -  for time-being, still need to work on FR part unless backend..
![image](https://github.com/user-attachments/assets/e0333eda-c08e-456a-893e-35487e758f4a)

## Features
- **User Authentication:** 
  - Signup and Login form FE part using axios and hashing with bcrypt and returns token of JWT
  - Using local storage for token and get access in whole system with apicontext store
- **Product Listing:** 
  
    - Login
    - Register
    

 - Products are presented in a responsive grid layout.
- **Product Details:** 
  - Clicking on a post shows related commens plus who made and who commented too

## Technologies Used
- **Frontend:** React (with hooks and functional components)
- **Styling:** CSS for custom designs
- **Routing:** React Router DOM v6.4+
- **State Management:** React Context API
- **API:** Axios for making API requests 
- 
- **Backend/Server:** Express, Mongodb, jwt, bcrypt and such more

## Installation and Setup
1. Clone the repository:
   ```bash
   Hit the URL : `https://github.com/akaash1024/FExto10X`
   ```
2. Navigate to the project directory:
   ```bash
   cd (if appear) 
   ```
3. Install dependencies using Bun:
   ```bash
   $ npm install
   ```
4. Open your browser and navigate to:
   ```
   npm run dev
   ```

## Project Structure
```

|-- Component/
|   |-- AppLayout.jsx
|   |-- Footer.jsx
|   |-- Header.jsx
|
|-- Pages/
|   |-- User-Auth
|-- App.css
|-- Home.jsx
|-- ErrorPage.jsx
|
|-- src/
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|
|-- .env/
|-- AuthContextStore.jsx/
```


## Learnings
- Gained hands-on experience with React Router DOM (v6.4+), especially loaders and actions.
- Learned how to use Axios for API calls.
- Improved CSS skills, particularly in creating hover effects and responsive layouts.
- Got comfortable working with modals and their integration in React.

## Future Improvements
- Add a search bar to filter products dynamically.
- Implement user profile pages with order history.
- Integrate a payment gateway for a complete shopping experience.
- Enhance the cart functionality to save items even after a page reload.

## Author
- **[AKash]**

Feel free to suggest improvements or report issues in this project. Thank you for reviewing!
