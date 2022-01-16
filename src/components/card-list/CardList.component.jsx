import Card from "../card/Card.component";
import "./CardList.style.css";

const CardList = (props) => {
  const { users } = props;

  return (
    <div className="card-list">
      {users.map(user => (
        <Card user={user} key={user.id}/>
      ))}
    </div>
  );
};

export default CardList;
