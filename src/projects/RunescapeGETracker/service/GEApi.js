import axios from "axios";

const PRICE_URL = "https://prices.runescape.wiki/api/v1/osrs/latest";
const MAPPING_URL = "https://prices.runescape.wiki/api/v1/osrs/mapping";
const IMAGE_BASE_URL = "https://oldschool.runescape.wiki/images/";

export async function fetchItemData() {
  //getting information
  const [mappingResult, priceResult] = await Promise.all([
    axios.get(MAPPING_URL),
    axios.get(PRICE_URL),
  ]);

  const mapping = mappingResult.data;
  const prices = priceResult.data;

  //combine name and price into one array
  const mergedData = mapping
    .map((item) => {
      const price = prices.data[item.id];
      return price
        ? {
            id: item.id,
            name: item.name,
            high: price.high,
            low: price.low,
            image: `${IMAGE_BASE_URL}${item.icon.replace(/ /g, "_")}`,
            members: item.members,
          }
        : null;
    })
    .filter(Boolean);

  console.log(mergedData);
  return mergedData;
}
