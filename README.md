# FLATDANGO
Flatdango is a web application that allows users to purchase movie tickets from the Flatiron Movie Theater.Users can view movie details including the poster,title,runtime,shiwtime and availabel tickets. They can also select a movie from the menu to display it's details.The application fetches data from a local server.
 ## Project Setup
  1. Create a new project folder
  2. Create a new GitHub repository(NB:ENSURE IT IS PUBLIC)
  3. Add your TM as a contributor to the project
  4. Ensure to regularly commit to the repository
  5. Set up a local server to host the JSON DB server
   ```bash
   json-server --watch db.json
   ```
  6. Update the JavaScript code to use the appropriate endpoints for fetching movie data from the local server.
  7. Customize the HTML code and the CSS file to match your desired layout and styling preferences
  ## Installation
  To Set up the project, follow these steps
  1. Clone the github repository
   ```bash
    git clone git@github.com:olami18/code-challenge-3.git
    ```
    * Navigate to this folder 
    ```bash
    cd code-challenge-3
    ```

    * In the terminal copy the SSH key and open the code in your vs code
    ```bash
    code .
    ```

## Core Deliverables
   1. Upon loading the page, the first movie's details are diplayed, including the poster, title, runtime, showtime and available tickets. The number of available tickets is derived by subtracting the number of tickets sold from the theater's capacity
   2. Users can buy a ticket for a movie by clicking the "Buy Ticket" button. The number of available tickets decreases on the frontend when a ticket is bought. If there are no available tickets, the user cannot buy a ticket. That means it is sold out

   * After completing the challenge do the following
   ```bash
  git add .
  ```
  ```bash
  git commit -m "....."
  ```
  ```bash
  git push
  ```
  ## License 
  [MIT](https://choosealicense.com/licenses/mit/)
  ### Author
    Olive Muthoni




