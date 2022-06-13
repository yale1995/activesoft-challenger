import { FaStar } from "react-icons/fa";
import { useState } from "react";


function NotaField({ maxNota, value, onChange }) {
  const [hover, setHover] = useState(null);

  return (
    <div>
      <div>
        {[...Array(maxNota)].map((start, i) => {
          let ratingValue = i + 1;

          return (
            <FaStar
              size={50}
              color={ratingValue <= (hover || value) ? "ffc107" : "#e4e5e9"}
              onClick={() => onChange(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              key={ratingValue}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NotaField;
