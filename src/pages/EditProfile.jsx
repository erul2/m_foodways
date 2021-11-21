import React, { useState } from "react";
import Maps from "../components/Maps";
import { Container, Row, Col, Modal } from "react-bootstrap";
import cssMod from "./AddProduct.module.css";

import { userSession } from "../Data";

function EditProfile() {
  document.title = "Edit Profile";
  const [mapShow, setMapShow] = useState(false);
  const handleMapClose = () => setMapShow(false);
  const handleMapShow = () => setMapShow(true);

  return (
    <Container className="px-xs-1 px-md-3 px-xl-5 mt-5 pb-5">
      <h4 className="subtitle mb-4">
        {userSession.status == "0" ? "Edit Profile" : "Edit Profile Partner"}
      </h4>
      <form>
        <Row>
          <Col xs={7} lg={9} xl={10}>
            <input
              type="text"
              placeholder={
                userSession.status == "0" ? "Full Name" : "Name Partner"
              }
              name="name"
              className={cssMod.input}
            />
          </Col>
          <Col xs={5} lg={3} xl={2}>
            <label
              htmlFor="inputfile"
              className={`${cssMod.input} d-flex justify-content-between`}
            >
              <div>Attach Image</div> <img src="/icon/attach.svg" />
            </label>
            <input id="inputfile" type="file" style={{ display: "none" }} />
          </Col>
          <Col xs={12}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={cssMod.input}
            />
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              className={cssMod.input}
            />
            <div className="d-flex">
              <input
                type="text"
                placeholder="Location"
                name="location"
                className={`${cssMod.input} me-4`}
              />
              <div className={`mbtn ${cssMod.mapbtn}`} onClick={handleMapShow}>
                Select On Map <img src="/icon/map.svg" />
              </div>
            </div>
          </Col>
          <Col xs={5} lg={3} className="ms-auto">
            <div className={`mbtn ${cssMod.btn}`}>Save</div>
          </Col>
        </Row>
      </form>
      <Modal size="xl" show={mapShow} onHide={handleMapClose} className="p-5">
        <Modal.Body>
          <Maps />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default EditProfile;
