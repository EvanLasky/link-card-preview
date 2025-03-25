import { html, fixture, expect } from '@open-wc/testing';
import "../card-preview.js";

describe("CardPreview test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <card-preview
        title="title"
      ></card-preview>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
