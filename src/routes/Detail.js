import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [shortcuts, setShortcuts] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setShortcuts(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? <h1>Detail Loading...</h1> : <div></div>}</div>;
}
export default Detail;
