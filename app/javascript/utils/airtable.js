import Airtable from "airtable";

const AIRTABLE_API_KEY = "";
const AIRTABLE_BASE_ID = "";
const AIRTABLE_TABLE_ID = "";

Airtable.configure({
  apiKey: AIRTABLE_API_KEY,
});

const base = Airtable.base(AIRTABLE_BASE_ID);

export function tableByID(tableID) {
  return base(tableID);
}

const table = base(AIRTABLE_TABLE_ID);

export function minifyItems(records) {
  return records.map((record) => getMinifiedItem(record));
}

export function getMinifiedItem(record) {
  return {
    id: record.id,
    ...record.fields,
  };
}

export { table };
