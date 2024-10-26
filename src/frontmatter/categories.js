/*const settings = require('../settings');

// get array of decoded category names, filtered as specified in settings
module.exports = (post) => {
	if (!post.data.category) {
		return [];
	}

	const categories = post.data.category
		.filter(category => category.$.domain === 'category')
		.map(({ $: attributes }) => decodeURIComponent(attributes.nicename));

	return categories.filter(category => !settings.filter_categories.includes(category));
};

const settings = require("../settings");

// Get array of decoded category names, filtered as specified in settings
module.exports = (post) => {
  if (!post.data.category) {
    return [];
  }

  const categories = post.data.category
    .filter((category) => category.$.domain === "category")
    .map(({ $: attributes }) => decodeURIComponent(attributes.nicename));

  // Filter out unwanted categories based on settings
  const filteredCategories = categories.filter(
    (category) => !settings.filter_categories.includes(category),
  );

  // Return categories as an array of strings
  return filteredCategories.map((category) => category.trim());
};
*/
const settings = require("../settings");

// Function to capitalize the first letter of each word
const capitalizeWords = (str) => {
  return str
    .split("-") // Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join back with a space
};

// Get array of decoded category names, filtered as specified in settings
module.exports = (post) => {
  if (!post.data.category) {
    return [];
  }

  const categories = post.data.category
    .filter((category) => category.$.domain === "category")
    .map(({ $: attributes }) => decodeURIComponent(attributes.nicename));

  // Filter out unwanted categories based on settings
  const filteredCategories = categories.filter(
    (category) => !settings.filter_categories.includes(category),
  );

  // Return categories as an array of formatted strings
  return filteredCategories.map((category) => capitalizeWords(category.trim()));
};
