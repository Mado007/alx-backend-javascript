const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const chai = require("chai");
const expect = chai.expect;

describe("sendPaymentRequestToApi", () => {
  beforeEach(() => {
    sinon.stub(Utils, "calculateNumber").returns(10);
    sinon.spy(console, "log");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should stub Utils.calculateNumber with a return value of 10.", () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
    expect(console.log.calledWith("The total is: 10")).to.be.true;
  });
});
