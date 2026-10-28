"use strict";
const test = require("node:test");
const assert = require("node:assert");
const { invoiceTotal, lineTotalCents } = require("../src/invoice");

test("invoice total rounds to cents", () => {
  // Lab 2 breaks this on purpose (change 100.01 -> 100.02) to see a red build.
  const items = [{ unitPrice: 100.01, qty: 1 }];
  assert.strictEqual(invoiceTotal(items), 100.01);
});

test("multiple lines sum correctly", () => {
  const items = [{ unitPrice: 10.0, qty: 2 }, { unitPrice: 5.5, qty: 1 }];
  assert.strictEqual(invoiceTotal(items), 25.5);
});

test("empty invoice is zero", () => {
  assert.strictEqual(invoiceTotal([]), 0);
  assert.strictEqual(lineTotalCents({ unitPrice: 3.33, qty: 0 }), 0);
});
