For this [take-home for Frontiers Market](https://github.com/jEastonMiller/FrontiersMarketTakeHome) I was asked to create a chat widget that would overlay a static recreation of the Frontiers Market desktop webpage. The chat widget should:

- Display the ongoing conversation with the chatbot.
- Only have one conversation per user.
- Utilize firestore to store the conversations.
- Connect to a chatbot of my choice.
- Preferebly deploy to firebase.

## General Approach

When thinking about the approach to the tasks that were laid out, I decided to focus on deployment, chatGPT integration, and backend functionality. Having no experience with firebase I quickly put together a boilerplate with the outlined tech stack and deployed this boilerplate to firebase.

From there I directly copied the html from [Frontiers Market](https://frontiersmarket.com/) and put it into a static component so I could begin building out the functionality I wanted to focus on. I created an Auth Modal to handle user login and registration, a chat widget with a custom asset (albeit not the most clear iconography from a design stand point), and a chat window.

After handling most of the styling I began creating the routes and controllers for the serveless functions as well as configuring the credentials for deployment. I linked the front end and back end together with a few test API calls and then proceeded to tackle integrating ChatGPT into the chat functionality. Unfortunately, I was not quite able to build a successful integration but given a bit more time I feel confident I would be able to find the solution.

I then built out most of the API calls to register users, log them in, and store conversations with the chatbot. One thing I did not get to, but planned on building out was guest authentication which would use cookies to store a randomly generated guestID and link that to the user's corresponding chat log. Once the user registered it would transfer this chatLog to the users collection on firestore.

## How To Run

- npm install
- npm build 
- npm run dev


<div align='center'>

## Made Using

</div>
<!-- https://ileriayo.github.io/markdown-badges/#markdown-badges -->
<div align='center'>

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

</div>

</br>
With a bit more time, I would do a couple things:

- Add cypress testing.
- Host the images and other assets elswhere to decrease file size for client.
- Finish styling and match the design language more closely.
- Finish integrating chatGPT and utilize a custom chatbot more focused on the cattle industry.
- More accessibility for screen readers, refining the semantic HTML, and keyboard navigation.
- Integrate Firebase Authentication.


Connect with me on LinkedIn
</br>
[![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/j-easton-miller/) 