import { NOT_FOUND_ERROR } from '../constants';
import Customer1 from './data/Customer1.json';
import Customer2 from './data/Customer2.json';

// As requested, use only the two provided JSON files as mock data.
const customers = [Customer1, Customer2];

/** Forced delay to simulate some network latency. */
async function delay(ms = 750) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Mocked search customer operation. */
async function findCustomer(
  options = {
    firstName: undefined,
    lastName: undefined,
    ssn: undefined,
    phoneNumber: undefined,
    saleNumber: undefined,
    receiptNumber: undefined,
    quoteNumber: undefined,
    manufacturerId: undefined,
    itemNumber: undefined,
    transactionNumber: undefined,
  }
) {
  await delay();

  return new Promise((resolve, reject) => {
    // Options not available in the mock data, if any of them was provided, certainly no customer to find.
    if (options.quoteNumber || options.manufacturerId || options.itemNumber || options.transactionNumber) {
      return reject(NOT_FOUND_ERROR);
    }

    let results = customers;

    if (options.firstName) {
      results = results.filter((c) => c.custInfo.Fname.toLocaleLowerCase() === options.firstName.toLocaleLowerCase());
    }

    if (options.lastName) {
      results = results.filter((c) => c.custInfo.Lname.toLocaleLowerCase() === options.lastName.toLocaleLowerCase());
    }

    if (options.ssn) {
      results = results.filter((c) => c.custInfo.ssn === options.ssn);
    }

    if (options.phoneNumber) {
      const part1 = options.phoneNumber.substring(0, 3);
      const part2 = options.phoneNumber.substring(3, 6);
      const part3 = options.phoneNumber.substring(6, 10);
      results = results.filter(
        (c) =>
          (c.custInfo.WPhone1 === part1 && c.custInfo.WPhone2 === part2 && c.custInfo.WPhone3 === part3)
          || (c.custInfo.HPhone1 === part1 && c.custInfo.HPhone2 === part2 && c.custInfo.HPhone3 === part3)
      );
    }

    if (options.saleNumber) {
      results = results.filter((c) => (c.sales ?? []).some((s) => s.id === parseInt(options.saleNumber, 10)));
    }

    if (options.receiptNumber) {
      results = results.filter((c) =>
        (c.sales ?? []).some((s) => s.receiptNumber === parseInt(options.receiptNumber, 10)));
    }

    if (results.length !== 1) return reject(NOT_FOUND_ERROR);
    return resolve(results[0]);
  });
}

/** Mocked get customer operation. */
async function getCustomer(id) {
  await delay();

  return new Promise((resolve, reject) => {
    const customer = customers.find((c) => c.custInfo.Id === parseInt(id, 10));
    if (!customer) return reject(NOT_FOUND_ERROR);
    return resolve(customer);
  });
}

export { findCustomer, getCustomer };
