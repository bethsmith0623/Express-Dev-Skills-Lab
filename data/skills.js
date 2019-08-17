const skills = [
  {skill: 'HTML', level: '3'},
  {skill: 'CSS', level: '3'},
  {skill: 'JavaScript', level: '3'},
  {skill: 'MongoDB', level: '1'},
  {skill: 'Mongoose', level: '2'},
  {skill: 'Express.js', level: '2'},
  {skill: 'React', level: '0'},
  {skill: 'Node.js', level: '1'},
  {skill: 'Python', level: '0'},
  {skill: 'Django', level: '0'},
  {skill: 'PostgreSQL', level: '0'},
];

module.exports = {
  getAll: function() {
    return skills;
  }
};