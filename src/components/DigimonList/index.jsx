import { useSelector } from "react-redux";

export const DigimonList = () => {
  const { digimons } = useSelector((state) => state);
  return (
    <div>
      <ul>
        {digimons.map(({ name, img, level }, index) => (
          <li key={index}>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
