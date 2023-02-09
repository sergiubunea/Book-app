export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>What have you been reading?</h1>
              <p className="lead">
                Our team would love to know what have you been reading and what
                book you want to choose to satisfy your need for readining and
                adventure.
              </p>
              <a className="btn main-color btn-large text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
            <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                <div className="ml-2">
                    <h1>Our collection is always changing</h1>
                    <p className="lead">Try to check in daily our collection is always changing! We work to provide the best eperience for our customers.</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-6">
                <div className="col-image-right">
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
