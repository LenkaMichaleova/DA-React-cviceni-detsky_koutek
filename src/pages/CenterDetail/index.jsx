import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CenterDetail = () => {
  const [centerData, setCenterData] = useState()
  const { centerId } = useParams();
  //console.log(centerId)

  useEffect(() => {
    const fetchCenter = async () => {
        const response = await fetch(`http://localhost:4000/api/centers/${centerId}`)
        const json = await response.json()
        setCenterData(json.data)
    }
    fetchCenter()
  }, [centerId])

  if (!centerData) {
    return <div>pobočka nenalezena</div>
  }

  return (
    <div className="container">
      <header>
        <h1>{centerData.name}</h1>
        <h3>{centerData.address}</h3>
      </header>
      <main>
        <p>
          {centerData.info}
        </p>
      </main>

    </div>
  );
};
