# React Product Catalog
- [DEMO LINK](https://DimaK88.github.io/react_phone-catalog/)

  ## Link to the layout used to create the project
  - [FIGMA LAYOUT](https://www.figma.com/file/BUusqCIMAWALqfBahnyIiH/Phone-catalog-(V2)-Original-Dark)

  ## Project Description
    This is a catalog application of phones, tablets and accessories, built using React. The user can browse the list of phones, filter, sort, search and view detailed information about each model.

    Functionality:
      - Display a list of phones
      - View details of the selected phone
      - Ability to sort or filter
      - Navigation between pages

  ## Technologies Used

  * **HTML5**
    Used to create the semantic structure of a page. In the HTML project, it was used together with JSX in React.

  * **SCSS (Sass)**
    Used a preprocessor SCSS.
    For styling and responsive layout, used Flexbox/Grid for convenient placement of objects on the page. Mixins were used to create a grid, media queries, padding, as well as variables for convenient styling, keyframes for animation

  * **JavaScript**
    Used for logic, data processing, events, and dynamic changes. Responsible for user interaction: state changes, event handling, manipulation of product arrays (filtering, searching, sorting), request to the server to retrieve the product.

  * **React**
    The framework I used to create a dynamic single-page application (SPA).
    The component approach allowed me to break the project into independent parts (Header, Footer, HomePage, ProductDetails...), each of which is responsible for its own logic and page appearance.
    Allows you to update only those parts of the DOM that change, which improves performance and UX.
    I used "props" to pass data between components.
    React Router was used to implement routing between different pages of the application without reloading the page

  ## How to Launch a Project
    To run the game locally and test it:

      1. Clone the repository: 'git clone'.
      2. Install dependencies: execute the command 'npm install'.
      3. After installing the dependencies, run the project using the command: 'npm start'.
