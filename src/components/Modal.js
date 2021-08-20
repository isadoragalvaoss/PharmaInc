export const Modal = ({ user }) => (
  <div className="modal" tabindex="-1" id={`popup${user.login.sha1}`}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <img className="modal-title" src={user.picture.large} alt="Img" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row linha1">
              <div className="col-4">
                <h6>Name</h6>

                <p>
                  {user.name.first} {user.name.last}
                </p>
              </div>
              <div className="col-4">
                <h6>Gender</h6>

                <p>{user.gender} </p>
              </div>
              <div className="col-4">
                <h6>Birth</h6>

                <p>{new Date(user.dob.date).toLocaleDateString()} </p>
              </div>
            </div>

            <div className="row linha2">
              <div className="col-8">
                <h6>Email</h6>

                <p>{user.email} </p>
              </div>
              <div className="col-4">
                <h6>Phone</h6>

                <p>{user.phone} </p>
              </div>
            </div>

            <div className="row linha3">
              <div className="col-4">
                <h6>Nationality</h6>
                <p>{user.nat} </p>
              </div>
              <div className="col-4">
                <h6>Country</h6>

                <p>{user.location.country} </p>
              </div>
              <div className="col-4">
                <h6>Street number</h6>

                <p>{user.location.street.number} </p>
              </div>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
);
