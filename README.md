# Brew Overview

Brew is a system made of two React PWAs. One is used by the cafe operator and one is used by customers. The idea is that Brew replaces the use of physical loyalty cards with a digital app. The basic usage goes as follows:

  1.) Customer signs in to the customer app on their phone.  
  
  2.) A QR code is generated that links to the cafe version of the app, containing the customers id.  
  
  3.) When the customer buys a coffee, the cafe operator scans the customers QR code, opening the cafe app and allowing them to adjust           loyalty appropriately. 
  
  4.) The customer can check the app to see a real time representation of their loyalty progress. 
  
## Brew Cafe
The cafe version of the brew app is what the cafe operators (such as a cashier) use to update the loyalty progress of their customers. The operator scans the QR code from the users phone, using their phone or tablets, signs in with an authorized account, and updates the customers loyalty based on how many coffees they purchased. If entering the QR code is not working or is too difficult, the operator can enter the customer's email address as the URL path, so long as it's linked to their google account.

## Technologies used
Brew cafe is a react based progressive web app. It was created from the basic create-react-app. This means code was written in a mix of Javascript, HTML, CSS and JSX. It also utilizes node.js packages like the firebase cli, and Font Awesome icons. 

Brew cafe utilizes firebase services via the firebase CLI. Specifically it uses firebase hosting to host the app, firebase authentication to allow operators to login with their authorized google account and real time sync firestore to store customer loyalty progress and allow the operators to edit it.

## Future Plans
Currently, there are no plans to continue this project in the future. This app was originally created for my high school cafe, however, by the time it was in a usable state, I was already close to the end of my last year. However, if I were to continue this project, I would implement the following:

1.) Statistics recording in order to provide monthly and annual reports to the operators. This could include the number of free coffees given vs coffees purchased, the number of customers on loyalty, the number of new loyalty customers the average number of coffees purchased at once for both individuals and all customers. 

2.) Record checking. The ability to check which staff member authorized a free coffee at which time and to who. This allows owners to check for suspicious actions like a user gaining eligibility for a free coffee outside of operating hours, or an employee giving free coffee to their friends.

3.) NFC or POS integration so that the customer does not need to have a photo taken of their QR code. Instead they could simply tap the NFC connector or the POS system would associate their credit card with their account and automatically update their progress.

## Lessons Learned
This was my first major web development project. Throughout development, I have learned a lot about web languages like javascript and HTML. However, I am still working on these areas as I feel more comfortable with languages like java and lua that I have learned in school. 

I have also gained an understanding of how to introduce APIs into my projects using node.js and specifically how to use the services provided by the firebase API. 

I think that the most important lesson learned during this project is the idea of self teaching using online resources. I found that following React App and Firebase tutorials was very helpful during the development of this project.

## What would I change if I made this app again?
If I were to do this project again, I think that I would try to actively use an agile development mindset. Back when I started this project, I had a set idea of what I wanted the app to look like and what it should do. I didn't really consider if other people thought the same way or if the way I intended to implement the idea was optimal. After attending a development workshop called Create Camp I realized the importance of checking with stakeholders and regularly stopping development to check if the plans I had made were still viable. I believe, had I known what I know now, the project would have been completed early enough to be used by the school cafe
