/* eslint-disable react/display-name */
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Card from "../components/Card";

const Favorites = () => {

  const {liked} = useContext(PhotoContext);
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {
          liked.length
          ? liked.map((photo) => <Card key={photo.id} photo={photo} />)
          : <p>No hay fotos favoritas</p>
        }
      </div>
    </div>
  );
};
export default Favorites;
