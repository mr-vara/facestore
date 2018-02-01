Facestore - Cool ASCII Faces store
====

This is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes. The homepage will display a list of products for people to browse.


## Installation

    # Install Project:
    $ npm install

    # Start Project:
    $ npm start


## Directory Structure

    # Client side Files
    public/src                          # Contains client side source files
    public/index.html                   # Main html document
    public/src/assets/css              	# css files
    public/src/assets/images           	# image files
    public/src/controllers           	# AngularJs Controllers
    public/src/directives*              # AngularJs Directives
    public/templates/directives*        # Directive Templates
  
    # Server side Files
    server/index.js                     # Main server file
    server/lib/items.js                 # Custom JavaScript module


Technologies Used
----

- NodeJS -v 8.9.3
- NPM -v 5.5.1
- Express -v 4.16.2
- Cool-ascii-faces -v 1.3.4
- Angular JS -v 1.4.3
- Semantic-ui -v 2.2.10
- Windows 10 Desktop

Features Implemented
----
- Entire app is developed by using Good looking Semantic-ui.
- Products are displayed in a responsive grid.
- User can sort the products in ascending order. Can sort by "size" or "price".
- Each product has :
  - a "size" field, which is the font-size (in pixels). Faces are displayed in correct size.
  - a "price" field, in cents, as dollars like `$3.51`.
  - a "date" field, which is the date the product was added to the catalog. Dates will display in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date will display.
- Paginaion is implemented for better UX.
- Animated "loading..." message will display, while the user waits for the data to load.
- when the user reaches the end and there are no more products to display, "~ end of catalogue ~" message will display.
- API is implemented with sort by and pagination details.

Highlights
----

- Clean code with proper structure.
- No bugs.
- Easy to understand the code and easy to expand the functionality.


NOTE
----
- This project is developed on a Windows machine, may encounter problem with other OS

Screenshots
----
![Desktop Screenshot](https://raw.githubusercontent.com/mr-vara/facestore/master/public/src/assets/images/screens/desktop1.jpg "Desktop Screenshot")

![Desktop Screenshot](https://raw.githubusercontent.com/mr-vara/facestore/master/public/src/assets/images/screens/desktop2.jpg "Desktop Screenshot")

![Responsive Screenshot](https://raw.githubusercontent.com/mr-vara/facestore/master/public/src/assets/images/screens/mobile1.jpg "Responsive Screenshot")

![Responsive Screenshot](https://raw.githubusercontent.com/mr-vara/facestore/master/public/src/assets/images/screens/mobile2.jpg "Responsive Screenshot")
