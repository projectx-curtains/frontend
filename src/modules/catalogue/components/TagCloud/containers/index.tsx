import { useState } from "react";

import TagCloud from "../components";

import { ITagCloudContainerProps } from "../interfaces";

const TagCloudContainer: React.FC<ITagCloudContainerProps> = ({
  id,
  name,
  colorTheSquare,
  color,
  removeTag,
}) => {
  // This actually create array for each component
  const [tags, setTags] = useState([
    ...[{ id, name, colorTheSquare, color, removeTag }],
  ]);
  // so this handler make no sense coz state stores only 1 element
  const handleClose = (id: number) => {
    setTags(
      tags.map((tag) => (tag.id === id ? { ...tag, removeTag: true } : tag))
    );
    setTimeout(() => setTags(tags.filter((tag) => tag.id !== id)), 400);
  };

  return <TagCloud tags={tags} handleClose={handleClose} />;
};
export default TagCloudContainer;
