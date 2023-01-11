import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();
  const onClickDerailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DerailA</Link>
      <br />
      <Link to="/page1/detailB">DerailB</Link>
      <br />
      <button onClick={onClickDerailA}>DetailA</button>
    </div>
  );
};
