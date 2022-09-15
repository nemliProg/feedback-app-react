import { useState } from "react";

function RatingSelect({select}) {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(Number(e.currentTarget.value));
    select(Number(e.currentTarget.value));
  }

  const labelStyle =
    "inline-block w-[35px] h-[35px] cursor-pointer select-none rounded-full py-2 px-2 text-center bg-slate-100 peer-checked:bg-[#ff6a95] peer-checked:font-bold peer-checked:text-white";

  return (
    <div className="w-4/5 m-auto flex flex-wrap items-center justify-center p-5 gap-4">
      <div>
        <input type="radio" value={1} onChange={handleChange} checked={selected === 1} name="rating" id="1" className="peer hidden" />
        <label htmlFor="1" className={labelStyle}>
          1
        </label>
      </div>

      <div>
        <input type="radio" value={2} onChange={handleChange} checked={selected === 2} name="rating" id="2" className="peer hidden" />
        <label htmlFor="2" className={labelStyle}>
          2
        </label>
      </div>

      <div>
        <input type="radio" value={3} onChange={handleChange} checked={selected === 3} name="rating" id="3" className="peer hidden" />
        <label htmlFor="3" className={labelStyle}>
          3
        </label>
      </div>

      <div>
        <input type="radio" value={4} onChange={handleChange} checked={selected === 4} name="rating" id="4" className="peer hidden" />
        <label htmlFor="4" className={labelStyle}>
          4
        </label>
      </div>
      <div>
        <input type="radio" value={5} onChange={handleChange} checked={selected === 5} name="rating" id="5" className="peer hidden" />
        <label htmlFor="5" className={labelStyle}>
          5
        </label>
      </div>
      <div>
        <input type="radio" value={6} onChange={handleChange} checked={selected === 6} name="rating" id="6" className="peer hidden" />
        <label htmlFor="6" className={labelStyle}>
          6
        </label>
      </div>
      <div>
        <input type="radio" value={7} onChange={handleChange} checked={selected === 7} name="rating" id="7" className="peer hidden" />
        <label htmlFor="7" className={labelStyle}>
          7
        </label>
      </div>
      <div>
        <input type="radio" value={8} onChange={handleChange} checked={selected === 8} name="rating" id="8" className="peer hidden" />
        <label htmlFor="8" className={labelStyle}>
          8
        </label>
      </div>
      <div>
        <input type="radio" value={9} onChange={handleChange} checked={selected === 9} name="rating" id="9" className="peer hidden" />
        <label htmlFor="9" className={labelStyle}>
          9
        </label>
      </div>
      <div>
        <input type="radio"  value={10} onChange={handleChange} checked={selected === 10} name="rating" id="10" className="peer hidden" />
        <label htmlFor="10" className={labelStyle}>
          10
        </label>
      </div>
    </div>
  );
}

export default RatingSelect;
