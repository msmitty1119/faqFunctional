import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="mt-5 mb-3">FAQ Page</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Question 1: How do I reset my password
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
              enim at nisi aliquet scelerisque. Praesent et ex eget metus
              ultrices maximus in a quam. Ut sit amet risus at ipsum vestibulum
              semper id vitae arcu. Sed auctor a mi sit amet ullamcorper.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Question 2: How do I create an account at your site?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
              enim at nisi aliquet scelerisque. Praesent et ex eget metus
              ultrices maximus in a quam. Ut sit amet risus at ipsum vestibulum
              semper id vitae arcu. Sed auctor a mi sit amet ullamcorper.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Question 3: What are your delivery hours?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse "
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
              enim at nisi aliquet scelerisque. Praesent et ex eget metus
              ultrices maximus in a quam. Ut sit amet risus at ipsum vestibulum
              semper id vitae arcu. Sed auctor a mi sit amet ullamcorper.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              Question 4: How much time does it take to deliver the order?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
              enim at nisi aliquet scelerisque. Praesent et ex eget metus
              ultrices maximus in a quam. Ut sit amet risus at ipsum vestibulum
              semper id vitae arcu. Sed auctor a mi sit amet ullamcorper.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
