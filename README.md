This is a [Next.js](https://nextjs.org/) project which implements server side rendering(SSR) and application for single side rendering.

The application renders the following three pages:

# Surfboard Ventures:

This page displays the data about Surfboard Ventures. It has a navigation bar that will direct the user either to Raw Engineering's page or Contentstack's page.
The main body consists of all the information related to Surfboard Ventures. It consits of a footer with all the relevant data and social media icons.

# Raw Engineering:

This page displays the data about Raw Engineering. The navigation bar here consits of a Home button which will take the user back to the Home page i.e, Surfboard Ventures page. The main body consists of all the information related to Raw Engineering. It consists of a footer with all the relevant data and social media icons.

# Contentstack:

This page displays the data about Contentstack. The navigation bar consits of a Home button which will take the user back to the Home page i.e, Surfboard Ventures page. The main body consists of all the information related to Contentstack. It consists of a footer with all the relevant data and social media icons.

# Data Storage:

The data for all the three companies was saved in a static file and the file has been hosted on GitHub Pages.

# Navigation:

The navigation has been enabled using next.js folder structure. The pages folder in the root directory consists of three pages each belonging to the respective company. As, the home page here was Surfboard Ventures, index.js file consists of all the relevent data for the same. Raw Engineering and Contentstack has two pages named raw-engineering and contentstack respectively. 

# Running the Application:

 Navigate into Frontend folder.\
  Then run this command only once:

      npm install

  To install all the dependencies.

  Then run the command:

      npm run start

  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
  
  
  The application is also hosted on vercel.

  Link for application [https://company-website-ssr.vercel.app/]




