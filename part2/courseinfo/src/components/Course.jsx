const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return parts.map((part) => <Part key={part.id} part={part} />);
};

const Course = ({ course }) => {
  const parts = course.parts;

  return (
    <div>
      <Header name={course.name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;
