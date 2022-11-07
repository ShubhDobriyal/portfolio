const SkillItem = ({ title, skillData }) => {
  return (
    <div className="mb-8 sm:mb-0 last:mb-0">
      <h5>{title}</h5>
      <ul className=" max-w-sm ">
        {skillData.map((skill, index) => {
          if (skillData.length - 1 > index) {
            return <li key={index}>{skill},</li>;
          } else {
            return <li key={index}>{skill}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default SkillItem;
