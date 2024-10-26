/* get array of decoded tag names
module.exports = (post) => {
	if (!post.data.category) {
		return [];
	}

	const categories = post.data.category
		.filter(category => category.$.domain === 'post_tag')
		.map(({ $: attributes }) => decodeURIComponent(attributes.nicename));

	return categories;
};
*/
// Function to capitalize the first letter of each word and replace hyphens with spaces
const formatTagName = (tag) => {
  return tag
    .split("-") // Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join back with a space
};

// Get array of decoded tag names
module.exports = (post) => {
  if (!post.data.category) {
    return [];
  }

  const categories = post.data.category
    .filter((category) => category.$.domain === "post_tag")
    .map(({ $: attributes }) => decodeURIComponent(attributes.nicename));

  // Format categories to the desired style
  return categories.map(formatTagName);
};
