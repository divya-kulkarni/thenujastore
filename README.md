# 🌱 thenujastore

An e-commerce website for the Instagram-born jewellery business, created using React and TypeScript. This webiste is fully responsive. It is not integrated with any backed, due to time constraints.

## 🔨 Tech Stack:

- ReactJS
- TypeScript
- CSS
- Testing Library

### Features

Here's what you can see on the website:

- Responsive Navbar
  (offcanvas for mobile)
- Product listings by category
- Product listings by collection
- Users' testimonials
- FAQ
- Shopping Cart
- Product suggestions
- Payment simulation using Stripe API

## 👩🏻‍🍳 The Process

Since this is a real brand with it's own identity, I interviewed the owner about their idea of the website. Some keywords they used - bright, clean, youthul. I also made note of the features they suggested, like User Testimonials.

According to their description, I created wireframes and used agile strategy to get continuous feedback and refine my designs.

Since the goal of this project was to hone my frontend development skills, I decided to omit the backed part of it, including user singup and authentication.

I started the development process using a mobile-first approach. As I added new components, each of them were developed to work on mobile first, and then adapted to larger screens using media queries.

Then I set up the routing, and integrated Stripe API to simulate the payment flow.

Finally, I added testing using Testing Library for all components, to ensure everything works well.

## 📚 What I learned

Along the way, while building everything, I took notes on what I've learned so I don't miss out on it. This really helped me to step back and completely understand all the new concepts.

- `useContext` hook: It helped me optimize website performance by preventing unnecessary re-render caused by prop changes. It also simplified state management across the website, so I could keep the Shopping Cart dynamic.
- React Bootstrap: By integrating components like Accordions and Dropdowns, I could avoid re-inventing the wheel and focus on the task at hand.

### Overall:

Each part of this project helped me understand more about building apps, managing complex information, and improving user experience. It was more than just making a website - it was about solving problems, learning new things, and improving my skills for future work.

## 💡 What can be improved

- Add a dynamic Instagram post section, urging users to join the brand's community. Set up a workflow in GitHub Actions to update the most recent posts weekly.
- Add user signup and authentication for a personalised shopping experience.
- Fetch product data from mongodb.

## 💻 Installation & Execution

- Clone the respsitory into your machine.
- Run `npm install` or `yarn` in `frontend` directory to install dependencies.
- Run `npm start` or `yarn start` to get the project started.
- Open http://localhost:3000 (or the address shown in your console) in your web browser to view the app.
- For payment silulation, use any test card from [this list](https://docs.stripe.com/testing#cards).
