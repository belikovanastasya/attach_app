import './userWorksListItem.sass';

export const UserWorkListItem = (props) => {
  const { work } = props;
  return (
    <div>
      <img src={work.images.sketch} alt="sketch" />
      <h2>{work.name}</h2>
      <span>Project</span>
      <span>{work.project}</span>
      <span>Votes</span><span>{work.votes}</span>
    </div>
  );
};
