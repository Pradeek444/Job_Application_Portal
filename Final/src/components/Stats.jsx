import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/stats.css";

const CountStats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          sectionObserver.unobserve(entry.target);
        }
      });
    });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const countNumbers = document.querySelectorAll('.counting');
    countNumbers.forEach((counter) => {
      const target = +counter.getAttribute('data-count');
      const increment = target / 200;
      const updateCounter = () => {
        const count = +counter.innerText;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  };

  return (
    <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s" ref={sectionRef}>
      <div className="container">
        <div className="row">

          <div className="col-lg-3 stats">
            <FontAwesomeIcon icon={faUser} size="3x" color="#3b1e09" />
            <div className="counting" data-count="9000">0</div>
            <h5>Happy clients</h5>
          </div>

          <div className="col-lg-3 stats">
            <FontAwesomeIcon icon={faCheck} size="3x" color="#3b1e09" />
            <div className="counting" data-count="280">0</div>
            <h5>Job Providers</h5>
          </div>

          <div className="col-lg-3 stats">
            <FontAwesomeIcon icon={faCode} size="3x" color="#3b1e09" />
            <div className="counting" data-count="75">0</div>
            <h5>Countries</h5>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CountStats;
