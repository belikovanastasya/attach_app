import './userWorksListItem.sass';

export const UserWorksListItem = (props) => {
  const { works } = props;
  return (
    <div>
      <img src={works.images.sketch} alt="sketch" />
      <h2>{works.name}</h2>
      <span>Project</span>
      <span>{works.project}</span>
      <span>Votes</span><span>{works.votes}</span>
    </div>
  );
};
