/* Fetches all the items a champion can buy in a match */
const fetchAllItems = async (latestVersion) => {
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/item.json`);
  const allItems = await response.json();

  return allItems.data;
};

class ItemInfo {
  static async getAllItems(latestVersion) {
    const allItems = fetchAllItems(latestVersion);
    return allItems;
  }

  getItemDetails(allItems) {
    const itemDetails = allItems[this.itemId];
    return itemDetails;
  }

  constructor(itemId, allItems, latestVersion) {
    this.itemId = itemId;
    this.itemDetails = this.getItemDetails(allItems);
    this.latestVersion = latestVersion;
  }

  getItemImage() {
    const itemImageId = this.itemDetails.image.full;
    const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${this.latestVersion}/img/item/${itemImageId}`;
    return imageUrl;
  }

  /* gets info on the items used to create the instance item */
  async getComponentItems(allItems) {
    const componentItemIds = this.itemDetails.from;
    if (componentItemIds === undefined) {
      return [];
    }
    const componentItemDetails = componentItemIds.map((itemId) => ({
      name: allItems[itemId].name,
      imageUrl: `https://ddragon.leagueoflegends.com/cdn/${this.latestVersion}/img/item/${itemId}.png`,
      cost: allItems[itemId].gold.total,
    }));
    return componentItemDetails;
  }

  getItemInfo(allItems) {
    if (this.itemDetails === undefined) {
      return false;
    }
    const { name } = this.itemDetails;
    const { description } = this.itemDetails;
    const cost = this.itemDetails.gold.total;
    const imageUrl = this.getItemImage(allItems);
    const componentItems = this.getComponentItems(allItems);
    const { tags } = this.itemDetails;

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
