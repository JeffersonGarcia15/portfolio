# My Portfolio Site

My inspiration for this portfolio was from this [video](https://www.youtube.com/watch?v=7WwtzsSHdpI&t=8379s), all the credit goes to the creator of that video.

Instead of using a template from GitHub pages, I decided to use a different template but this time using React, while giving it my own touch like using [formspree](https://formspree.io) to enable anyone visiting my portfolio to have the option to successfully email me through my portfolio and to redirect users to my list of projects by clicking on the list of photos in each section. The email part was particularly challenging, and spent a few hours doing research to come up with a solution. 

The look is similar as I actually like the design, and I was able to keep working with React, figure out a way to enable emails through my portfolio website, used `iTyped` to do that cool animation listing all the things I like, and also practice more my css skills by learning Sass. I also listed my skills which is something that was not done in the tutorial, again, because I added my own modifications to it.

I also wanted to deploy my site to heroku as I have always struggled to deploy to heroku without any complications. And I was particularly interested to know what was the process like to deploy an app that had not any environmental variables and no backend. The method I found was rather interesting, I had to connect GitHub and heroku to sort of work like GitHub actions, and I also had to add a builpack. This last part was very interesting because I had to go to a repo, and copy that [url](https://github.com/mars/create-react-app-buildpack), and did all the work, and this builds a new version of the project every time there are changes on the main branch of my specified repo. All the credit for that particular solution goes to this [video](https://www.youtube.com/watch?v=tA4Fl1dZgjc).

## Visit my website

* [portfolio](https://jefferson-portfolio.onrender.com)