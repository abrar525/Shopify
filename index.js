$(document).ready(function () {
  $("#basicBtn").click(function () {
    $(".contentContainer").empty();
    $(
      ".contentContainer"
    ).append(`<div class="basicPlanCont pt-2 pb-2 mb-3 m-0">
        <div class="costCont pe-3 ps-3 mb-4">
          <h1 class="amountHead">
            $1,994<span class="inrPara">INR/mo</span>
          </h1>
        </div>
        <div
          class="durationCont bg-success bg-opacity-25 d-flex align-items-center justify-content-center pt-2 pb-2 mb-5"
        >
          <p class="durationPara m-0">Get your first 3 months for $20/mo</p>
        </div>
        <div class="includedCont pe-3 ps-3 mb-5">
          <h3 class="includedHead">What's included on Basic</h3>
          <div
            class="basicReportCont d-flex align-items-center pe-3 ps-3 mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-check2 text-success me-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <p class="m-0 benefitPara">Basic Reports</p>
          </div>
          <div
            class="basicReportCont d-flex align-items-center pe-3 ps-3 mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-check2 text-success me-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <p class="m-0 benefitPara">Up to 1,000 inventory locations</p>
          </div>
          <div
            class="basicReportCont d-flex align-items-center pe-3 ps-3 mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-check2 text-success me-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <p class="m-0 benefitPara">2 staff accounts</p>
          </div>
        </div>
        <div class="buttonCont pe-3 ps-3 mb-4">
          <button class="planBtn pt-2 pb-2">Try for free</button>
        </div>
      </div>`);
  });
  $("#shopifyBtn").click(function () {
    $(".contentContainer").empty();
    $(
      ".contentContainer"
    ).append(`<div class="basicPlanCont-2 pt-2 pb-2 mb-3 shadow-lg">
    <div class="costCont pe-3 ps-3 mb-4">
      <h1 class="amountHead">
        $7,447<span class="inrPara">INR/mo</span>
      </h1>
    </div>
    <div
      class="durationCont bg-success bg-opacity-25 d-flex align-items-center justify-content-center pt-2 pb-2 mb-5"
    >
      <p class="durationPara m-0">Get your first 3 months for $20/mo</p>
    </div>
    <div class="includedCont pe-3 ps-3 mb-5">
      <h3 class="includedHead">What's included on Basic</h3>
      <div
        class="basicReportCont d-flex align-items-center pe-3 ps-3 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-check2 text-success me-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <p class="m-0 benefitPara">professional Reports</p>
      </div>
      <div
        class="basicReportCont d-flex align-items-center pe-3 ps-3 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-check2 text-success me-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <p class="m-0 benefitPara">Up to 1,000 inventory locations</p>
      </div>
      <div
        class="basicReportCont d-flex align-items-center pe-3 ps-3 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-check2 text-success me-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <p class="m-0 benefitPara">5 staff accounts</p>
      </div>
    </div>
    <div class="buttonCont pe-3 ps-3 mb-4">
      <button class="planBtn pt-2 pb-2">Try for free</button>
    </div>
  </div>`);
  });
  $("#advancedBtn").click(function () {
    $(".contentContainer").empty();
    $(
      ".contentContainer"
    ).append(`<div class="basicPlanCont-3 pt-2 pb-2 mb-3 shadow-lg">
    <div class="costCont pe-3 ps-3 mb-4">
      <h1 class="amountHead">
        $30,164<span class="inrPara">INR/mo</span>
      </h1>
    </div>
    <div
      class="durationCont bg-success bg-opacity-25 d-flex align-items-center justify-content-center pt-2 pb-2 mb-5"
    >
      <p class="durationPara m-0">Get your first 3 months for $20/mo</p>
    </div>
    <div class="includedCont pe-3 ps-3 mb-5">
      <h3 class="includedHead">What's included on Basic</h3>
      <div
        class="basicReportCont d-flex align-items-center pe-3 ps-3 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-check2 text-success me-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <p class="m-0 benefitPara">Customer Report builder</p>
      </div>
      <div
        class="basicReportCont d-flex align-items-center pe-3 ps-3 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-check2 text-success me-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <p class="m-0 benefitPara">Up to 1,000 inventory locations</p>
      </div>
      <div
        class="basicReportCont d-flex align-items-center pe-3 ps-3 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-check2 text-success me-3"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <p class="m-0 benefitPara">15 staff accounts</p>
      </div>
    </div>
    <div class="buttonCont pe-3 ps-3 mb-4">
      <button class="planBtn pt-2 pb-2">Try for free</button>
    </div>
  </div>`);
  });
});
