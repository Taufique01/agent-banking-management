export const SummaryElement = ({ title, value }) => {
  return (
    <div className="box">
      <div className="right-side">
        <div className="box-topic">{title}</div>
        <div className="number">{value}</div>
      </div>
    </div>
  );
};
