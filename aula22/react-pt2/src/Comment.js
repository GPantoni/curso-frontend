const Comment = ({ email, name, body }) => {
  return (
    <div>
      <h3>
        E-mail:
        {email}
      </h3>
      <h3>
        Name:
        {name}
      </h3>
      <h3>Comment:</h3>
      <p>{body}</p>
      <br />
      <br />
    </div>
  );
};
export default Comment;
