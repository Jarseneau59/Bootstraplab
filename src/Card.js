import React from "react";
import Modal from "./Modal";

export default function CardSection() {
    return (
        <div className="container my-4">
            <div className="row g-3">
                {/* Card 1 */}
                <div className="col-12 col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Card One</h5>
                            <p className="card-text">Short description.</p>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#m1">
                                Open Modal
                            </button>
                        </div>
                    </div>
                    <Modal id="m1" title="Card One">
                        <p>Content for Card One.</p>
                    </Modal>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Card Two</h5>
                            <p className="card-text">Short description.</p>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#m2">
                                Open Modal
                            </button>
                        </div>
                    </div>
                    <Modal id="m2" title="Card Two">
                        <p>Content for Card Two.</p>
                    </Modal>
                </div>

                {/* Card 3 */}
                <div className="col-12 col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Card Three</h5>
                            <p className="card-text">Short description.</p>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#m3">
                                Open Modal
                            </button>
                        </div>
                    </div>
                    <Modal id="m3" title="Card Three">
                        <p>Content for Card Three.</p>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
