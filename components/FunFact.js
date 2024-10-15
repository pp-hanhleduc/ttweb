import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunFact = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="funfact-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 6 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Kênh Đầu tư</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 9 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Gói tích lũy</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 12 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Tính năng Độc đáo</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 15 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Đối tác Tài chính</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
