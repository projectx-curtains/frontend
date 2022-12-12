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
  const [tags, setTags] = useState([
    ...[{ id, name, colorTheSquare, color, removeTag }],
  ]);

  const handleClose = (id: number) => {
    setTags(
      tags.map((tag) => (tag.id === id ? { ...tag, removeTag: true } : tag))
    );
    setTimeout(() => setTags(tags.filter((tag) => tag.id !== id)), 400);
  };

  return (
    <TagCloud
      tags={tags}
      handleClose={handleClose}
    />
  );
};
export default TagCloudContainer;
