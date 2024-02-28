const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const chai = require("chai");
const expect = chai.expect;

describe("sendPaymentRequestToApi", () => {
  beforeEach(() => {
    sinon.spy(Utils, "calculateNumber");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should call Utils.calculateNumber with correct args", () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.called).to.be.true;
    expect(Utils.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
  });
});
