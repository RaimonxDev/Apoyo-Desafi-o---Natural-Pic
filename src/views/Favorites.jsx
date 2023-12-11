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
        {liked.length ? liked.map((photo) => <Card key={photo.id} photo={photo} />) : <h3>No hay fotos favoritas</h3>}
      </div>
    </div>
  );
};
export default Favorites;
