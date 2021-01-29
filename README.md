# front-end
FE - Unit 2 &amp; 3

## ☝️ **Pitch**

These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. 

While you could use several mobile apps to accomplish this, **AnywhereFitness** is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. 

Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.

## ✅  **MVP**

**Web & iOS**

1. User can create/register as a `client` and login with the registered credentials.

2. User can create/register as an `instructor` by entering an additional Auth Code during signup, and can login with the registered credentials.

3. **(iOS only)** `client` and `instructor` are both presented with the appropriate on-boarding walkthrough on first sign-in, with an option to skip it.

4. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

- `Name`
- `Type`
- `Start time`
- `Duration`
- `Intensity level`
- `Location`
- `Current number of registered attendees`
- `Max class size`

5. Authenticated `client` can search for available classes. At a minimum, they must be able to search by the following criteria:

- `class time`
- `class date`
- `class duration`
- `class type`
- `intensity level`
- `class location`

6. **(iOS only)** Authenticated `instructor` can create virtual punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, pilates, etc.)

7. **(iOS only)** Authenticated `user` can reserve a spot in a `class` with available seats open, and can reschedule or cancel their current `reservation` from the mobile app.

## 🏃‍♀️**Stretch**

**Web & iOS**

1. Implement payments using PayPal, Stripe or another 3rd party API.


---------------------------------------------



👀 Product Vision Document
This is the template for the Product Vision Document that teams complete after their initial icebreaker. The PVD is crucial to the planning phase and is mandatory for all groups to complete before starting their project.
☝️ Proposal

What problem does your app solve?
These days, fitness classes can be held anywhere--a park, an unfinished basement or a garage--not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.
Be as specific as possible; how does your app solve the problem?
Anywhere Fitness allows users (instructors) to keep attendance and process payments from clients all in one place.
What is the mission statement?
These days, fitness classes can be held anywhere--a park, an unfinished basement or a garage--not just at a traditional gym. Anywhere Fitness takes the pain out of keeping attendance and processing payments so that you can focus on what matters most.
💡 Features

What features are required for your minimum viable product?
User can create/register as a client.
User can create/register as an instructor by entering an additional auth code during signup.
User can login.
Authenticated instructor can create, update, and delete a class.
Class must have the following properties:
Name
Type
Start time
Duration
Intensity Level
Location
Current number of registered attendees
Max class size
Authenticated Client can search for available classes. With the following criteria
Class time
Class date
Class duration
Class type
Intensity level
Class location

What features may you wish to put in a future release?
		Implement payments using Paypal, Stripe, or another 3rd party API.
What do the top 3 similar apps do for their users?
	The same as we have mentioned here for our MVP + Future release.

🛠 Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using?
	Backend - Node.js, Express, Knex, Sqlite3, PostgreSQL, yup (validation), Helmet, CORS, JWT, Auth0 (maybe), dotEnv, cross-env, nodemon, jest, supertest
Do the APIs you need require you to contact them to gain access?
		Backend - No
Are you required to pay to use said API(s)?
		Backend - No

🎯 Target Audience

Who is your target audience? Be specific.
	Fitness instructors running classes over the web, in the park, or anywhere that is not a traditional gym.
What feedback have you gotten from potential users?
	It could be very helpful. Managing clients with spreadsheets is a norm, and our product alleviates this issue.

Have you validated this problem and your solution with a target audience? Describe how.



🔑 Prototype Key Feature(s)

How long do you think it will take to implement these features?
		The full two weeks given for BW.
Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
		It is very possible.
