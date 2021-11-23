// Fetches all the items a champion can buy in a match
const fetchAllItems = async () => {
  const versionResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json', { mode: 'cors' });
  const versions = await versionResponse.json();
  const latestVersion = versions[0];
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/item.json`);
  const allItems = await response.json();

  return allItems.data;
};

class ItemInfo {
  constructor(itemId) {
    this.itemId = itemId;
  }

  static async getAllItems() {
    const allItems = fetchAllItems();
    return allItems;
  }

  getItemDetails(allItems) {
    const itemDetails = allItems[this.itemId];
    return itemDetails;
  }

  getItemImage(allItems) {
    const itemDetails = this.getItemDetails(allItems);
    const itemImageId = itemDetails.image.full;
    const imageUrl = `https://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${itemImageId}`;
    return imageUrl;
  }

  // gets info on the items used to create the instance item
  getComponentItems(allItems) {
    const itemDetails = this.getItemDetails(allItems);
    const componentItemIds = itemDetails.from;
    if (componentItemIds === undefined) {
      return [];
    }
    const componentItemDetails = componentItemIds.map((itemId) => ({
      name: allItems[itemId].name,
      imageUrl: `https://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${itemId}.png`,
      cost: allItems[itemId].gold.total,
    }));
    return componentItemDetails;
  }

  getItemInfo(allItems) {
    const itemDetails = this.getItemDetails(allItems);
    const { name } = itemDetails;
    const { description } = itemDetails;
    const cost = itemDetails.gold.total;
    const imageUrl = this.getItemImage(allItems);
    const componentItems = this.getComponentItems(allItems);
    const { tags } = itemDetails;

    return {
      name,
      description,
      cost,
      imageUrl,
      componentItems,
      tags,
    };
  }
}

export default ItemInfo;
