import { useState } from "react";

import TagCloud from "../components";

import { ITagCloudContainerProps } from "../interfaces";
import { sampleDataTags } from "../mocks/sampleDataTags";

const TagCloudContainer = ({}) => {
  const initialState = sampleDataTags.map((tag: any) => ({
    ...tag,
    isTagRemoved: false,
  }));

  const [tags, setTags] = useState(initialState);
  console.log(tags);

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, index + 1);
    setTimeout(() => setTags(newTags), 400);
  };

  const handleClose = (index: number) => {
    const newTags = [...tags];
    newTags[index].isTagRemoved = true;
    setTags(newTags);
    removeTag(index);
  };

  return <TagCloud tags={tags} handleClose={handleClose} />;
};
export default TagCloudContainer;
