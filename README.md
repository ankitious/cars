
# Frontend React Test

This is AUto1's cars and car detail page's light version.

It is built on the top of create-react-app.

It is having back end as Node.

## Installing / Getting started

##### Install dependencies
```
1. yarn install  ( This will install dependancies for both server and client!)
```
##### Run the tests
```
2. yarn test
```

##### Run the application
```
3. yarn start
```

### Built With

- Redux (State Management)
- Styled-components (Styling)
- Redux-saga (To manage side effects)
- Axios (To make http requests)

### Prerequisites

- node >= 8
- npm >= 5

### Setting up Dev

Below are the commands to set up in local environment. 
```shell
git clone https://github.com/ankitious/cars.git
cd cars/
yarn install
yarn dev
```

### Project Structure

    .
    ├── build         
    ├── public                  # Public folder
    ├── src                     # Source files 
         ├── components
                 ├── page404     # page not found component
                 ├── shared      # common components
                 ├── detail      # Detail View
                 ├── home        # Home View
         ├── images
         ├── store
                 ├── actions    
                 ├── api
                 ├── reducers
                 ├── sagas        # side effects management
                 ├── index.js
         ├── utility             # common reusable functions
                 ├── constants
                 ├── index.js
                 ├── localStorage.js
         ├── App.js
         ├── Routes              # Manages React Routes        
         ├── index.js            # set up redux store & bootstrap application 
         ├── setupTests.js
    ├── package.json                  
    └── README.md

I have tried to add most of the features without using additional libraries. 

### Deploy



