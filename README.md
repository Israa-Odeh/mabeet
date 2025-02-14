# Mabeet - Accommodation Booking Platform

A web application for booking accommodations, built with React and TypeScript. The platform offers a seamless experience for users to search and book accommodations, while providing administrators with essential management capabilities.

## Live Demo

🔗 [Mabeet on Netlify](https://mabeet.netlify.app)

## Src Folder Structure

The project follows a well-structured folder hierarchy for maintainability and scalability.

![Src folder structure](https://github.com/user-attachments/assets/3b3b787a-4938-44ea-81b1-ebc0ceba5163)

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

![Login page UI preview](https://github.com/user-attachments/assets/89f8bf5a-80e4-4f57-bb62-e858510d990d)

### User Features

![User signing in - 1](https://github.com/user-attachments/assets/8c407ebe-07c9-47a1-90cd-f6ced8e2fc3a)

![User signing in - 2](https://github.com/user-attachments/assets/c70680a4-68cb-45c7-92a0-fb0325f7d11f)

#### Home Page

- Search functionality
  - search by city name
  - Specify check-in & check-out dates
  - Set number of guests
  
  ![User home page with search feature](https://github.com/user-attachments/assets/3bd276d4-2f29-48a9-bbcb-cf82c7768bd2)

  ![Searching for hotels in Ramallah](https://github.com/user-attachments/assets/329819c5-f70a-4e16-90d6-ee777300a768)

- Curated featured deals and discounted accommodations

  ![Featured deals and discounted accommodations](https://github.com/user-attachments/assets/14279458-28d0-4bb2-aa8e-5b14d194e6d5)

- Personalized display of recently visited hotels

  ![Recently visited hotels - 1](https://github.com/user-attachments/assets/4d018c6b-5951-44d6-ae0d-2da0e09e8f58)

  ![Recently visited hotels - 2](https://github.com/user-attachments/assets/d3dbf9d5-d737-4b37-9e3a-48d9d83b1261)

- Showcase of trending destinations

  ![Trending destinations - 1](https://github.com/user-attachments/assets/c223e9b4-73d8-4bac-a8da-2dde4649ea69)

  ![Trending destinations - 2](https://github.com/user-attachments/assets/d61db6e7-60fe-456c-8464-edfd3ebc88f5)


#### Enhanced Search Results

![Hotel search results in Ramallah](https://github.com/user-attachments/assets/6b96403c-c21c-477d-b466-ca30c25b37f3)

- Client-side filtering capabilities:
  - Price range adjustments

    ![Price range adjustments](https://github.com/user-attachments/assets/30cd5bb4-2c2c-4da5-9254-a92032e70b3b)

  - Rating-based filtering
 
    ![Rating-based filtering](https://github.com/user-attachments/assets/a89b7021-5cee-4a56-a3ef-32c8c6dcb525)

  - Room type selection

    ![Room type selection](https://github.com/user-attachments/assets/4455a64c-246f-4a1a-83d6-88fdac0b7f00)

  - Amenity preferences

    ![Amenity preferences](https://github.com/user-attachments/assets/bd62459c-3618-45f2-a366-f501e1a86c51)


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
    
  ![Essential Plaza Hotel details](https://github.com/user-attachments/assets/cf76d998-0de1-4f23-8451-19878307c623)
    
- Interactive Google Maps integration
  - Hotel location
  - Nearby attraction highlights

  ![Hotel location on Google Maps](https://github.com/user-attachments/assets/068d8a34-8737-4d8b-b60f-e501173c7332)
  
- Available room listings:
  - Room type specifications
  - Capacity details (adults/children)
  - Nightly rates
  - Room-specific amenities
  - Direct reservation options

  ![Available rooms at Plaza Hotel - 1](https://github.com/user-attachments/assets/a5a3edd1-d7a1-458c-850b-ae9b07a83768)

  ![Available rooms at Plaza Hotel - 2](https://github.com/user-attachments/assets/3a4f5f36-9e96-411e-abc2-6886cd38c697)

  ![Available rooms at Plaza Hotel - 3](https://github.com/user-attachments/assets/7b07fb8d-9070-42b2-ae11-15fc1c85c44f)
  
- Guest review section featuring visitor experiences

  ![Guest reviews - 1](https://github.com/user-attachments/assets/e8f9e81a-f4f2-4a43-928a-0b16cad18264)

  ![Guest reviews - 2](https://github.com/user-attachments/assets/61a6a47f-85c8-4922-a7d9-0131ed04ce0d)

  ![Guest reviews - 3](https://github.com/user-attachments/assets/ddfe8e67-81d9-4cce-a84e-c139f7f3e557)

  ![Guest reviews - 4](https://github.com/user-attachments/assets/dee22067-efd1-461d-8ff2-a9bca0f2f8e5)
  
#### Streamlined Booking Process

- Simplified checkout workflow
  
  ![Room booking - 1](https://github.com/user-attachments/assets/eb85b2da-a60a-4ceb-a541-7781197395ff)

  ![Room booking - 2](https://github.com/user-attachments/assets/23035383-7baf-4711-b77a-f829103a3e49)

  ![Room booking - 3](https://github.com/user-attachments/assets/46949ac9-cbfd-4451-86be-fed0635142d3)

- Booking confirmation summary

  ![Booking confirmation - 1](https://github.com/user-attachments/assets/12fc62bb-f4fc-414f-9818-c056b34f67e0)

  ![Booking confirmation - 2](https://github.com/user-attachments/assets/3d61a3dd-df95-454e-bfc0-75e97c5f8f3a)
  
### Administrative Features

![Admin signing in - 1](https://github.com/user-attachments/assets/abd1a002-d3c2-4def-a13c-7b445604015c)

![Admin signing in - 2](https://github.com/user-attachments/assets/b4b6acc6-95ed-49cf-ab2f-c678fb20b159)

The admin dashboard provides essential management capabilities:

#### City Management

![City management](https://github.com/user-attachments/assets/6160fb4e-c761-4a05-b2e9-bc864e119eaa)

- View paginated city listings
  
  ![Paginated city listings](https://github.com/user-attachments/assets/2bb1a2df-5e57-4757-ae67-ba4a7bf24841)

  ![Searching for a city](https://github.com/user-attachments/assets/9a042f85-2369-4a17-a9e6-b739091da583)
  
- Create new cities
  
  ![Creating a new city - 1](https://github.com/user-attachments/assets/e4123dea-7a95-45c3-8a79-9f3ed85b4227)

  ![Creating a new city - 2](https://github.com/user-attachments/assets/dedfbf33-ccf4-40a9-a11c-08dc4d1c593a)
  
- Update existing city information
  
  ![Updating city details](https://github.com/user-attachments/assets/431cecb4-6542-4317-8911-f2c44f6de544)
  
- Remove cities from the system
  
  ![Deleting a city](https://github.com/user-attachments/assets/fd0149b9-eb05-46cd-a319-f0d897a2bed2)

#### Hotel Management

![Hotel management](https://github.com/user-attachments/assets/aefc0a49-86f3-494f-8057-3449b9424e6a)

**Error:** Unable to load hotels. Please try again later.

**Cause:** This error is due to an internal server error (backend issue).

![Hotel management error](https://github.com/user-attachments/assets/e3b4ffc6-f0e8-4668-ad36-aa9f2e34fd3d)

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
