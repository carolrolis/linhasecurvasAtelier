import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CategoryPath() {
  const [category, setCategory] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.categoryID) {
      setCategory(params.categoryID);
    }
  }, [params.categoryID]);
  return <div>Category: {category}</div>;
}