This repository contains the source code for the official website of Tyler's Pub at the Pier, a popular dive bar located in Seneca, SC, near Clemson University. The website is designed to provide customers with easy access to menus, weekly specials, operating hours, and contact information.

# Features
Responsive Design: The layout adapts to various screen sizes, ensuring a seamless experience on both mobile and desktop devices.
Comprehensive Menus: Features separate, detailed pages for the regular Food Menu, Drinks Menu, Brunch Menu, and a special Game Day Menu.
Interactive Menu Filtering: On the food and drink pages, users can filter items by category (e.g., Apps, Pizzas, Cocktails) for easier navigation, powered by JavaScript.
Weekly Specials: A dedicated page showcases daily food and drink specials using a clear and visual card-based layout.
Engaging Homepage: The homepage features an animated hero section that highlights the pub's atmosphere and recent accolades.
Contact & Location Information: A persistent footer across all pages provides the pub's address, a clickable phone number for easy calling, hours of operation, and links to social media profiles.

# Technologies Used
HTML5: The core markup for the site's structure.
CSS3: Custom styling for layout, colors, and fonts, utilizing Flexbox and Grid.
JavaScript: Used for dynamic features, primarily the menu filtering functionality.
Bootstrap 5: A CSS framework used for the responsive grid system and pre-styled components.
Font Awesome: Provides scalable vector icons used throughout the site.
Google Fonts: The 'Rye' font is used for headings to match the pub's branding.
Animate.css: A library used for the animations on the homepage hero section.

# Project Structure
## The repository is organized with a clear separation of concerns for assets and pages.
/
├── index.html                # Homepage
└── root/
    ├── Css/                  # Stylesheets for different pages
    │   ├── about.css
    │   ├── food.css
    │   ├── specials.css
    │   └── style.css
    ├── Images/               # All image assets (logos, menu photos, etc.)
    ├── Pages/                # HTML files for sub-pages
    │   ├── about.html
    │   ├── brunch.html
    │   ├── drinks.html
    │   ├── food.html
    │   ├── gameDay.html
    │   └── specials.html
    └── Scripts/
        └── script.js         # Main JavaScript for menu filtering

        
