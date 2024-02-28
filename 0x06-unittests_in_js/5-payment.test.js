const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");
const chai = require("chai");
const expect = chai.expect;

describe("sendPaymentRequestToApi", () => {
  beforeEach(() => {
    sinon.spy(console, "log");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("call sendPaymentRequestToAPI with 100, and 20", () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith("The total is: 120")).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  it("call sendPaymentRequestToAPI with 10, and 10", () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith("The total is: 20")).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });
});
