# Express Developer Skills Lab


**__Part 1__**

GOAL: To put in a rep doing everything we did in the Express - Routers and Controllers lesson.

REQUIREMENTS:
!* Scaffold a new app named "express-dev-skills" using express generator.
!* Be sure to create an array of data representing some of your developer skills. The specific properties are up to you.
* Implement _index_ functionality for the skills resource.
* Implement _show_ functionality for the skills resource.

BONUSES:
* Use EJS partial views to make your templates more DRY.
* Add styling or use a CSS framework to make the app look better.

HINTS:
* Keep the data resource name short and simple - something like skills.
* Following best-practice routing and MVC will result in teh following modules for the skills resource:
     * routes/skills.js
     * models/skill.js
     * views/skills
     * controllers/skills.js
* Use RESTful routes.




**__Part 2__**

GOAL: to put in a rep doing everything that we did in the Express - Middleware lesson by adding the following functionality to the express-dev-skills lab:

REQUIREMENTS:
* Display an "Add Skill" link on the index view that when clicked, displays a new view that displays a form for entering a new Dev Skill.
* When a new Dev Skill is submitted, the skill is added to the 'database' and redirect the user to the index view.
* On the show view, display a "Delete Skill" link that when clicked, deletes the skill from the 'database' and redirects to the index view.

BONUSES:
* On the show view, display an "Edit Skill" link that when clicked, displays an edit view that displays a form for editing that Dev Skill.
* When the edit Dev Skill form is submitted, the skill should be updated in the 'database' and redirect the user back to the show view.

HINTS:
* The controller action will need to get the Dev Skill being edited using the Skill Model and pass it to the edit view.
* Pre-fill <input> elements by using the value attribute and some EJS tags to write out the data properties of the skill passed in.