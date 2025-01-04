# Mabeet - Accommodation Booking Platform

A web application for booking accommodations, built with React and TypeScript. The platform offers a seamless experience for users to search and book accommodations, while providing administrators with essential management capabilities.

## Features

### Authentication System

- Secure login with role-based access (Admin/User)
- Protected routes ensuring secure access to user-specific features and admin dashboard
- Session management using secure token-based authentication

### User Features

#### Home Page

- Search functionality
  - search by city name
  - Specify check-in & check-out dates
  - Set number of guests
- Curated featured deals and discounted accommodations
- Personalized display of recently visited hotels
- Showcase of trending destinations

#### Enhanced Search Results

- Client-side filtering capabilities:
  - Price range adjustments
  - Rating-based filtering
  - Room type selection
  - Amenity preferences
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
- Interactive Google Maps integration
  - Hotel location
  - Nearby attraction highlights
- Available room listings:
  - Room type specifications
  - Capacity details (adults/children)
  - Nightly rates
  - Room-specific amenities
  - Direct reservation options
- Guest review section featuring visitor experiences

#### Streamlined Booking Process

- Simplified checkout workflow
- Booking confirmation summary

### Administrative Features

The admin dashboard provides essential management capabilities:

#### City Management

- View paginated city listings
- Create new cities
- Update existing city information
- Remove cities from the system

#### Hotel Management

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
