# Mabeet - Accommodation Booking Platform

A web application for booking accommodations, built with React and TypeScript. The platform offers a seamless experience for users to search and book accommodations, while providing administrators with essential management capabilities.

## Live Demo

🔗 [Mabeet on Netlify](https://mabeet.netlify.app)

## Src Folder Structure

The project follows a well-structured folder hierarchy for maintainability and scalability.

![Src folder structure](https://github.com/user-attachments/assets/50da88e9-766e-4c78-b688-03f5d09c93d0)

## Steps to Set Up the Project

### 1. Clone the repository
Clone the project to your local machine:

```bash
git clone https://github.com/Israa-Odeh/mabeet.git
```
### 2. Install dependencies
Navigate into the project directory and install the required dependencies using npm:

```bash
cd mabeet
npm install
```
### 3. Start the development server
Once the dependencies are installed, start the development server with:

```bash
npm run dev
```
This will start the Vite development server, and you should see the application running at http://localhost:5173 (by default).

## Features

### Authentication System

- Secure login with role-based access (Admin/User)
- Protected routes ensuring secure access to user-specific features and admin dashboard
- Session management using secure token-based authentication.

![Login page UI preview](https://github.com/user-attachments/assets/7a632449-bd6a-4082-a40f-2c7e4fa2b871)

### User Features

![User signing in - 1](https://github.com/user-attachments/assets/618730a1-f833-48fb-942e-6b32698629d2)

![User signing in - 2](https://github.com/user-attachments/assets/31fe3619-8ae7-4894-9152-2d55b14ecaf8)

#### Home Page

- Search functionality
  - search by city name
  - Specify check-in & check-out dates
  - Set number of guests
  
  ![User home page with search feature](https://github.com/user-attachments/assets/302cf0f9-2674-4ec1-84e5-7a76aa48f1ee)

  ![Searching for hotels in Ramallah](https://github.com/user-attachments/assets/80a7d578-3f64-4374-b624-1833352a8733)

- Curated featured deals and discounted accommodations

  ![Featured deals and discounted accommodations](https://github.com/user-attachments/assets/071c73a1-d3cb-4e74-ab27-21a3c4dcaf31)

- Personalized display of recently visited hotels

  ![Recently visited hotels - 1](https://github.com/user-attachments/assets/1c90c954-a239-4d7d-8e2b-1ab1edc22a65)

  ![Recently visited hotels - 2](https://github.com/user-attachments/assets/075f3f32-4937-4ab3-b812-3eae2288cc7f)

- Showcase of trending destinations

  ![Trending destinations - 1](https://github.com/user-attachments/assets/f9c58019-5314-4b5b-b3ea-267a763320a1)

  ![Trending destinations - 2](https://github.com/user-attachments/assets/45b158bb-6dfe-4f45-9b06-9d723c76727f)


#### Enhanced Search Results

![Hotel search results in Ramallah](https://github.com/user-attachments/assets/f0e4586a-bfd6-4200-bfa4-d882b31f5eee)

- Client-side filtering capabilities:
  - Price range adjustments

    ![Price range adjustments](https://github.com/user-attachments/assets/a102cba6-b22e-4943-b9c5-0c9209f70a61)

  - Rating-based filtering
 
    ![Rating-based filtering](https://github.com/user-attachments/assets/3a87aa5a-d50b-43f0-86c8-4303d4e8f16f)

  - Room type selection

    ![Room type selection](https://github.com/user-attachments/assets/f118479d-e912-4023-a3c6-f2ffaeb6bc8a)

  - Amenity preferences

    ![Amenity preferences](https://github.com/user-attachments/assets/b5362005-2851-41a6-bf2d-3971afe69b62)

- Optimized performance through React observer implementation
  - Viewport-based result loading
  - Reduced initial data overhead

#### Detailed Hotel Views

- Comprehensive photo gallery
- Essential hotel information:
  - Name and rating
  - Location details
  - Room capacity
  - Detailed description
  - Available amenities
    
  ![Essential Plaza Hotel details](https://github.com/user-attachments/assets/c5bff4d1-5940-43c0-97ea-7a9667b35526)
    
- Interactive Google Maps integration
  - Hotel location
  - Nearby attraction highlights

  ![Hotel location on Google Maps](https://github.com/user-attachments/assets/ee64c0b1-42b1-4256-b6aa-05b71a1513a3)
  
- Available room listings:
  - Room type specifications
  - Capacity details (adults/children)
  - Nightly rates
  - Room-specific amenities
  - Direct reservation options

  ![Available rooms at Plaza Hotel - 1](https://github.com/user-attachments/assets/dfed1668-54cd-4f5c-be0f-a1ce7cfcbacc)

  ![Available rooms at Plaza Hotel - 2](https://github.com/user-attachments/assets/9425b77c-f177-4a44-b7a8-ba1d6963df90)

  ![Available rooms at Plaza Hotel - 3](https://github.com/user-attachments/assets/a6c71321-4c9e-43a1-ac82-ac7265f57edc)
  
- Guest review section featuring visitor experiences

  ![Guest reviews - 1](https://github.com/user-attachments/assets/600f87e9-3880-498d-90ee-d4006b782b38)

  ![Guest reviews - 2](https://github.com/user-attachments/assets/603e4f44-1636-4986-98b8-860360651ea2)

  ![Guest reviews - 3](https://github.com/user-attachments/assets/67527e2e-e08d-4efa-9cc1-90221d991e34)

  ![Guest reviews - 4](https://github.com/user-attachments/assets/af2e64ac-0c32-435b-8dbb-65a75e8b3715)
  
#### Streamlined Booking Process

- Simplified checkout workflow
  
  ![Room booking - 1](https://github.com/user-attachments/assets/da3cfdfa-b047-4fd7-a34b-220eb77f1424)

  ![Room booking - 2](https://github.com/user-attachments/assets/fcd6d5af-c11c-4079-8d11-0973a3157a71)

  ![Room booking - 3](https://github.com/user-attachments/assets/51624e74-eb73-47bd-8d71-4d2b182eced3)

- Booking confirmation summary

  ![Booking confirmation - 1](https://github.com/user-attachments/assets/0d9eed7c-4492-4158-a15d-153ca80c2d5d)

  ![Booking confirmation - 2](https://github.com/user-attachments/assets/ee7bf1ea-9cbf-4eb6-8b0f-d188c9f2d711)
  
### Administrative Features

![Admin signing in - 1](https://github.com/user-attachments/assets/4a98d38b-0145-47f7-a321-b6307e7a10e4)

![Admin signing in - 2](https://github.com/user-attachments/assets/dd360639-5ff1-4da0-ae03-9f2f80ac6f43)

The admin dashboard provides essential management capabilities:

#### City Management

![City management](https://github.com/user-attachments/assets/d4dadbb0-01af-405c-ac33-60ab98eea1e0)

- View paginated city listings
  
  ![Paginated city listings](https://github.com/user-attachments/assets/d1049e2d-54c2-4ff0-9689-1563b74ea637)

  ![Searching for a city](https://github.com/user-attachments/assets/edd8fedb-81f0-4ae6-85e3-9ac3c50a9fb2)
  
- Create new cities
  
  ![Creating a new city - 1](https://github.com/user-attachments/assets/a60bf11c-431b-4c0b-8185-3182a7472d01)

  ![Creating a new city - 2](https://github.com/user-attachments/assets/02336c89-6f3d-4b08-963b-6619f980420b)
  
- Update existing city information
  
  ![Updating city details](https://github.com/user-attachments/assets/54caca7e-d035-43eb-ba1e-f55bf78571f7)
  
- Remove cities from the system
  
  ![Deleting a city](https://github.com/user-attachments/assets/241ad0a0-8349-4847-90bb-d60a2b017d80)

#### Hotel Management

![Hotel management](https://github.com/user-attachments/assets/a8487da6-8fc7-40f6-be94-978ac92c3203)

**Error:** Unable to load hotels. Please try again later.

**Cause:** This error is due to an internal server error (backend issue).

![Hotel management error](https://github.com/user-attachments/assets/ef46ebd1-64b1-4516-a5e6-b41ef1e015aa)

- View all hotels in the system
- Add new hotel properties
- Update hotel details
- Remove hotels from the system

#### Room Management

- View rooms for specific hotels
- Add new rooms to hotels
- Update room details
- Remove rooms from hotels

## Technology Stack

- **Core Framework**: React
- **Language**: TypeScript
- **Development**:
  - Vite (Build Tool)
  - Formik (Form Management)
  - React Router (Navigation)
  - Git (Version Control)
- **Code Quality**:
  - Prettier (Formatting)
