import { beneficts } from "../../../data/beneficts";

export const BenefictsSection = () => {
  return (
    <section id="benefics">
      <h3>Abrete a vivir esta experiencia</h3>
      <ul className="">
        {beneficts.map(({ img, benefict, imgDescription }) => (
          <div key={benefict} className="">
            <img src={img} alt={imgDescription} />
            <span>{benefict}</span>
          </div>
        ))}
      </ul>
    </section>
  );
};
