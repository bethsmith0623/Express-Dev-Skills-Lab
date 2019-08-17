const skills = [
  {skill: 'HTML', description: 'The text-based approach to describing how content is structured.', level: '3'},
  {skill: 'CSS', description: 'Style sheets used to format the layout of web pages.', level: '3'},
  {skill: 'JavaScript', description: 'An interpreted programming language with object-oriented capabilities.', level: '3'},
  {skill: 'MongoDB', description: 'An open source database management system using a document-oriented database model.', level: '1'},
  {skill: 'Mongoose', description: 'A cross-platform embedded web server and networking library.', level: '2'},
  {skill: 'Express.js', description: 'A web appl framework for Node.js, designed for building web apps and APIs.', level: '2'},
  {skill: 'React', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.', level: '0'},
  {skill: 'Node.js', description: 'A platform built on JavaScript runtime for building fast, scalable network apps.', level: '1'},
  {skill: 'Python', description: 'An interpreted, object- oriented, high-level programming language with dynamic semantics.', level: '0'},
  {skill: 'Django', description: 'A high-level Python web framework that take scare of the hassle of web development.', level: '0'},
  {skill: 'PostgreSQL', description: 'An open source object-relational database management system.', level: '0'},
];

module.exports = {
  getAll: function() {
    return skills;
  }
};